---
layout: gist
title: DB Optimization
---

# DB Optimization

`Rule-based Optimization`: by how to execute a query

`Cost-based Optimization`: by cheapest execution plan

## Query Optimization 

- Make sure that the `JOIN` columns are indexed in both tables
- In most cases, many small query is faster than complex query 
- In most cases, `LEFT JOIN`/`RIGHT JOIN` is slower than `INNER JOIN` ([source](https://stackoverflow.com/questions/2726657/inner-join-vs-left-join-performance-in-sql-server))
- [Avoiding joins examples](https://medium.com/squad-engineering/blazingly-fast-querying-on-huge-tables-by-avoiding-joins-5be0fca2f523)
- use `WHERE` statement to make smaller dataset before processing
- `a IN (b,c,d)` translate to `(a=b OR a=c OR a=d)`
- `a NOT IN (b, c, d)` translates to `(a != b AND a != c AND a != d)`
- `EXISTS` is much faster than `IN`, when the sub-query results is very large ([source](https://stackoverflow.com/questions/24929/difference-between-exists-and-in-in-sql))
- `IN` is faster than `EXISTS`, when the sub-query results is very small
- `GROUP BY` on the smallest dataset you can (use where before grouping)
- Avoid `ORDER BY` if ordering column not indexed (ordering in application instead)
- Postgres can use an index when doing `some_string LIKE 'pattern%'` but not for `some_string LIKE '%pattern%'`
- Use `BEGIN` and `ROLLBACK` for explain statement



## Postgres 

- [Postgres tuning query plans](https://blog.gojekengineering.com/the-postgres-performance-tuning-manual-query-plans-52a023c2342d)
- [Postgres Performance Consideration](https://thoughtbot.com/blog/postgresql-performance-considerations)
- Visualize EXPLAIN: <https://tatiyants.com/pev/#/plans/new>
- More readable EXPLAIN: <https://explain.depesz.com/>
- [Autovacuum](https://www.2ndquadrant.com/en/blog/autovacuum-tuning-basics/)

Cheatsheet:
```sql
EXPLAIN ANALYZE VERBOSE SELECT ...         --more detail
EXPLAIN (FORMAT JSON) SELECT ...           --in json format

VACUUM          --recovering space occupied by “dead tuples”
ANALYZE         --ensures the statistics are up-to-date
```

## MySQL

Ref:
- <https://dev.mysql.com/doc/refman/5.7/en/optimization.html>