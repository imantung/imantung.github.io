---
layout: gist
title: SQL Optimization
---

# SQL Optimization

### Joins
In order to avoid full table scan, make sure that the join columns are indexed in both tables. A join on a single column can benefit from composite indexes as well, but only if the join column is in the beginning of the list of the composite index definition.

### Where conditions
You use a lot of a IN (b, c, d) filter conditions on statuses. This will be translated to (a=b OR a=c OR a=d) before execution. If you can limit the number of the items in the list you can increase performance. Similarly, a NOT IN (b, c, d) translates to (a != b AND a != c AND a != d).

This means that if the complementary values makes a smaller list and you use that list with NOT IN you may improve the performance. Example:

If you have b, c, d, e, f, g statuses and you want to check if a is b, c, d or e, you want to use a NOT IN (f, g), which translates to (a != f AND a != g) instead of a IN (b, c, d, e), because the prior generates less filter condition, so it’s going to be faster.

### Group by
It’s a very important principal to execute the grouping on the smallest dataset you can. In our case, in the subquery you’re executing a group by, then from the outer query you filter the results. However, some filter conditions can be moved into the inner query (e.g. order_data.order_type_filter condition can be moved into the inner query).

As the evaluation of the WHERE conditions happens before the grouping, this way you can reduce the dataset on which the MySQL needs to execute the grouping, so you might have some performance benefits.

### Ordering
Ordering a large result set has performance penalty as well. It’s worth to benchmark ordering with SQL and getting the result set without ordering and make the ordering in code. This way you can transport load from the MySQL server to the app server. You can gain performance with this technique if your DB server is fairly utilized, especially if the ordering column is not indexed. 

### Benchmark HAVING vs subquery
Instead of using subquery you can use HAVING filter clause which is evaluated after the grouping. This way you can help MySQL to avoid preparing the inner query’s dataset before continuing with the external query, yo this might also help in performance.

### Use EXPLAIN statement
You can ask the execution plan of your queries with EXPLAIN (simply perpend EXPLAIN in the beginning of your query before SELECT). This will give you cool information about what is going to happen during execution and you can identify suboptimal filtering or missing indexes on joins.

<https://dev.mysql.com/doc/refman/5.7/en/using-explain.html>
