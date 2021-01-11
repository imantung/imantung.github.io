---
layout: gist
title: DB Optimization
---

# DB Optimization

Optimization Option (from easy - hard):
- Optimize server setting
- Database archiving/purging
- Optimize database connection
- Optimize database query
- Optimize database application
- Optimize database structure


Database Problem Patterns:
- `Excessive SQLs`: Executing a lot (> 500) different SQL Statements
- `N+1 Query Problem`: Executing the same SQL statement multiple times (>20):
- `Slow Single SQL Issue`: Executing a single SQL that contributes > 80% of response time
- `Data-Driven` Issue: Same request executes different SQL depending on input parameters
- `Database Heavy`: Database Contribution Time is > 60% of overall response time
- `Unprepared Statements`: Executing the same SQL without preparing the statement
- `Pool Exhaustion`: Impacted by High Connection Acquisition Time (getConnection time > executeStatement)
- `Inefficient Pool Access`: Excessive access to connection pool (calling getConnection > 50% of executeStatement count)
- `Overloaded Database Server`: Database server is simply overloaded with too many requests from different apps

Query Optimizer:
- `Rule-based Optimization`: by how to execute a query
- `Cost-based Optimization`: by cheapest execution plan

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

## Archiving

Reference: 
- <https://www.microfocus.com/media/flyer/top_four_data_retention_concerns_facing_records_managers_flyer.pdf>
- <https://www.freeitdata.com/5-steps-to-crafting-a-data-archiving-strategy/>

Concern:
1. Regulation Compliance
2. Litigation Preparation
3. Storage Management
4. Security


