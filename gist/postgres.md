---
layout: gist
title: Postgres
---

# Postgres

Ref:
- [Postgres VS MySQL](https://www.2ndquadrant.com/en/postgresql/postgresql-vs-mysql/)
- [PGBadger](https://github.com/darold/pgbadger): Log analysis
- [Postgres Performance Consideration](https://thoughtbot.com/blog/postgresql-performance-considerations)
- [Removing postgresql bottlenext caused by high traffic](https://www.percona.com/blog/2020/05/29/removing-postgresql-bottlenecks-caused-by-high-traffic/)
- [PostgreSQL Running Slow? Tips & Tricks to Get to the Source](https://severalnines.com/database-blog/postgresql-running-slow-tips-tricks-get-source)
- [Key metrics for PostgreSQL monitoring](https://www.datadoghq.com/blog/postgresql-monitoring/)
- [Statistic Cheatsheet](https://gist.github.com/ruckus/5718112)

At Scale:
- [Citus](https://www.citusdata.com/): scale out postgres
- [Timescale](https://www.timescale.com/): timeseries database
- [Stolon](https://github.com/sorintlab/stolon): cloud native PostgreSQL manager for HA

### Configuration

Ref:
- [PGTune](https://pgtune.leopard.in.ua/#/): postgres configuration generator
- [Postgres Configuration Cheatsheet](https://pgdash.io/blog/postgres-configuration-cheatsheet.html)
- [Tune database parameter and configuration](https://www.enterprisedb.com/postgres-tutorials/comprehensive-guide-how-tune-database-parameters-and-configuration-postgresql)

Cheatsheets
```sql
SHOW all;
SHOW config_file;

SET configuration_parameter TO DEFAULT;

SELECT * FROM pg_settings;
UPDATE pg_settings SET setting = reset_val WHERE name = 'configuration_parameter';

SELECT pg_reload_conf();    -- Reload config
```

### Slow Query

Ref:
- [Visualize EXPLAIN](https://tatiyants.com/pev/#/plans/new)
- [More readable EXPLAIN](https://explain.depesz.com/)
- [Postgres tuning query plans](https://blog.gojekengineering.com/the-postgres-performance-tuning-manual-query-plans-52a023c2342d)
- [Parallel Queries](https://www.percona.com/blog/2019/02/21/parallel-queries-in-postgresql/)
- [random_page_cost configuration](https://amplitude.engineering/how-a-single-postgresql-config-change-improved-slow-query-performance-by-50x-85593b8991b0)

Check if query are waiting for another query to complete. Need to tuning up the query.
```sql
SELECT * FROM pg_stat_activity WHERE waiting = TRUE;           -- PostgreSQL 9.5 and earlier
SELECT * FROM pg_stat_activity WHERE wait_event IS NOT NULL;   -- PostgreSQL 9.6
SELECT * FROM pg_stat_activity WHERE wait_event IS NOT NULL AND backend_type = 'client backend';   -- PostgreSQL 10 and later 
```

Check ratio of index scan vs seq scan
```sql
SELECT 
	relname,
	seq_tup_read,
	idx_tup_fetch,
	cast(idx_tup_fetch AS numeric) / (idx_tup_fetch + seq_tup_read) AS idx_tup_pct 
FROM pg_stat_user_tables 
WHERE (idx_tup_fetch + seq_tup_read)>0 ORDER BY idx_tup_pct;
```

### Extensions

List:
- [pg_stat_statements](https://www.citusdata.com/blog/2019/02/08/the-most-useful-postgres-extension-pg-stat-statements/): tracking execution statistics of all SQL statements executed by a server
- [pg_repack](https://github.com/reorg/pg_repack): remove bloat from tables and indexes, and optionally restore the physical order of clustered indexes


Cheatsheet
```sql
SELECT * FROM pg_extension                        -- list of installed extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";       -- create
DELETE EXTENSION IF EXISTS "uuid-ossp";           -- drop
```

### Bloated

Bloated due to:
- To many dead tupple
- WAL (Write-Ahead-Log)
- Unused Index

Ref:
- [Get rid of your unused indexes](https://www.cybertec-postgresql.com/en/get-rid-of-your-unused-indexes/)
- [Postgresql Vacuum Monitoring](https://www.datadoghq.com/blog/postgresql-vacuum-monitoring/)
- [Why and How WAL Bloats](https://dzone.com/articles/postgresql-why-and-how-wal-bloats)
- [WAL: checkpoint_completion_target benchmark](https://www.depesz.com/2010/11/03/checkpoint_completion_target/)
- [Autovacuum](https://www.2ndquadrant.com/en/blog/autovacuum-tuning-basics/)

Check if database bloated (live tupple > dead tupple) in master database. Need manual `VACCUM` or aggresive `AUTOVACUUM` 
```sql
SELECT relname, n_live_tup, n_dead_tup, last_vacuum, last_autovacuum, last_analyze, last_autoanalyze 
FROM pg_stat_user_tables 
WHERE n_live_tup < n_dead_tup;
```

Check unused index
```sql
SELECT s.schemaname,
       s.relname AS tablename,
       s.indexrelname AS indexname,
       pg_relation_size(s.indexrelid) AS index_size
FROM pg_catalog.pg_stat_user_indexes s
   JOIN pg_catalog.pg_index i ON s.indexrelid = i.indexrelid
WHERE s.idx_scan = 0      -- has never been scanned
  AND 0 <>ALL (i.indkey)  -- no index column is an expression
  AND NOT i.indisunique   -- is not a UNIQUE index
  AND NOT EXISTS          -- does not enforce a constraint
         (SELECT 1 FROM pg_catalog.pg_constraint c
          WHERE c.conindid = s.indexrelid)
ORDER BY pg_relation_size(s.indexrelid) DESC;
```

## Saving Space

- [Measure postgres size](https://dba.stackexchange.com/questions/23879/measure-the-size-of-a-postgresql-table-row/23933#23933)
- [Calculating and saving space](https://stackoverflow.com/questions/2966524/calculating-and-saving-space-in-postgresql/7431468#7431468)


Table size
```sql
SELECT 
   relname AS "table_name", 
   pg_size_pretty(pg_table_size(C.oid)) AS "table_size" 
FROM pg_class C 
   LEFT JOIN pg_namespace N ON (N.oid = C.relnamespace) 
WHERE nspname NOT IN ('pg_catalog', 'information_schema') 
   AND nspname !~ '^pg_toast' 
   AND relkind IN ('r')
ORDER BY pg_table_size(C.oid) DESC;
```


### Replication

Ref:
- [Streaming Replication conflicts](https://www.cybertec-postgresql.com/en/streaming-replication-conflicts-in-postgresql/)

```sql
-- Check replication status
SELECT client_addr, state, sent_location, write_location, flush_location, replay_location
FROM pg_stat_replication;

-- Check replication delay
select now() - pg_last_xact_replay_timestamp() AS replication_delay;

SELECT * FROM pg_stat_replication;
```

### Backup

```bash
# dump data only as insert statement
pg_dump --table=export_table --data-only --column-inserts my_database > data.sql

# backup specific table
psql -h <host1> ... -c 'copy (select ... from <tablename> where ...)
to stdout' | psql -h <host2> ...  -c 'copy <tablename> from stdin'
```

### Connections

Percentage of max connections in use
```sql
SELECT (SELECT SUM(numbackends) FROM pg_stat_database) / (SELECT setting::float FROM pg_settings WHERE name = 'max_connections')
```