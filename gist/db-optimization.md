---
layout: gist
title: DB Optimization
---

# DB Optimization

Optimization Strategy:
- `Rule-based Optimization`: by how to execute a query
- `Cost-based Optimization`: by cheapest execution plan

Performance Issue root cause:
- Impropriated Settings
- Query Bottleneck
    - Bloated Database
    - Data Hotspot (a lot of access requests at certain point of time in same disk sector)
    - Cache
- Connection/Session Management (Database pooling)

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


