---
layout: gist
title: Postgres
---


# Postgres

Ref:
- [Postgres VS MySQL](https://www.2ndquadrant.com/en/postgresql/postgresql-vs-mysql/)
- [Citus](https://www.citusdata.com/): scale out postgres
- [Timescale](https://www.timescale.com/)
- [Stolon](https://github.com/sorintlab/stolon): cloud native PostgreSQL manager


Postgres does not automatically return the last insert id, because it would be wrong to assume you're always using a sequence. You need to use the RETURNING keyword in your insert to get this information from postgres.
```sql
INSERT INTO user (name) VALUES ('John') RETURNING id
```


### PSQL

Connect
```bash
psql -d template1         # template1 is a database created by postgres itself, and is present on all installations
psql -h public-ip-server -p 5432 -U postgres
PGPASSWORD=password psql -h 0.0.0.0 -p 5432 -U user
```

Psql command
```
\l            #list
\c DATABASE   # connect db
\dt           # show table
\d+           # show table + indices
```


#### Configuration

```sql
SHOW all;
SHOW config_file;

SET configuration_parameter TO DEFAULT;

SELECT * FROM pg_settings;
UPDATE pg_settings SET setting = reset_val WHERE name = 'configuration_parameter';


SELECT pg_reload_conf();    -- Reload config
```

### Json
```sql
SELECT * FROM table_name WHERE json_field @> '[{"field":"value"}]'
```

### Replication


```sql
-- Check replication status
SELECT client_addr, state, sent_location, write_location, flush_location, replay_location
FROM pg_stat_replication;

-- Check replication delay
select now() - pg_last_xact_replay_timestamp() AS replication_delay;
```


Replication script (run on slave)
```bash
#!/bin/bash

MASTER_DB_IP=$1

[[ -z "${MASTER_DB_IP}" ]] &&
echo "[error] parameters are missing
Eg: ./replication.sh <master_db_ip>" && exit 123

sudo service postgresql stop
sudo cp /var/lib/postgresql/9.5/main/recovery.conf /tmp
sudo -u postgres rm -rf /var/lib/postgresql/9.5/main
sudo -u postgres pg_basebackup -h $MASTER_DB_IP -D /var/lib/postgresql/9.5/main -U rep -v -P
sudo mv /tmp/recovery.conf /var/lib/postgresql/9.5/main/
sudo chown postgres:postgres /var/lib/postgresql/9.5/main/recovery.conf
sudo service postgresql start
```

### Extensions

[list of PostgreSQL extensions officially supported here](https://www.postgresql.org/docs/current/static/contrib.html)
[find 3rd party extensions](https://pgxn.org/)

```sql
SELECT * FROM pg_extension                        -- list of installed extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";       -- create
DELETE EXTENSION IF EXISTS "uuid-ossp";           -- drop
```

### Performance/Tuning

- Visualize EXPLAIN: <https://tatiyants.com/pev/#/plans/new>
- More readable EXPLAIN: <https://explain.depesz.com/>
- PGTune: <https://pgtune.leopard.in.ua/#/>
- [Postgres tuning query plans](https://blog.gojekengineering.com/the-postgres-performance-tuning-manual-query-plans-52a023c2342d)
- [Postgres Performance Consideration](https://thoughtbot.com/blog/postgresql-performance-considerations)
- [Autovacuum](https://www.2ndquadrant.com/en/blog/autovacuum-tuning-basics/)
- [Removing postgresql bottlenext caused by high traffic](https://www.percona.com/blog/2020/05/29/removing-postgresql-bottlenecks-caused-by-high-traffic/)
- [PostgreSQL Running Slow? Tips & Tricks to Get to the Source](https://severalnines.com/database-blog/postgresql-running-slow-tips-tricks-get-source)
- [Tune database parameter and configuration](https://www.enterprisedb.com/postgres-tutorials/comprehensive-guide-how-tune-database-parameters-and-configuration-postgresql)



```sql
EXPLAIN ANALYZE VERBOSE SELECT ...         --more detail
EXPLAIN (FORMAT JSON) SELECT ...           --in json format

VACUUM          --recovering space occupied by “dead tuples”
ANALYZE         --ensures the statistics are up-to-date

-- Check bloated table
SELECT relname,n_live_tup, n_dead_tup from pg_stat_user_tables where relname in ('TABLENAME');

-- Check bottleneck (query waiting for another query to complete)(PostgresSQL 10)
SELECT * FROM pg_stat_activity WHERE wait_event IS NOT NULL AND backend_type = 'client backend';
```

