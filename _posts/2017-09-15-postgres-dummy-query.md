---
layout: post
title: "Dummy Query for Postgres"
description: "example of dummy query in sql"
date: 2017-09-15 08:14:18 +0700
comments: true
---


What I meant by `dummy query` is the query that doesn't need table. This kind of query is may useful for unit testing.



Query 1: This is working for most sql
```sql
SELECT 'Anto' as name, 12 as age
UNION SELECT 'Linda', 9
UNION SELECT 'Mike', 10
```

Query 2:
```sql
SELECT  *
FROM  (values ('Anto', 12),('Linda', 9), ('Mike', 10) ) AS q (name, age)
```

Query 3: Single column with a lot of data
```sql
SELECT id FROM regexp_split_to_table('1,2,3,4,5,7,8,9', ',') AS id
```


Query 4: To expect more seconds for query. `pg_sleep` usually used at [blind sql injection](https://www.owasp.org/index.php/Blind_SQL_Injection).
```sql
SELECT 1 as id, pg_sleep(10)
```
