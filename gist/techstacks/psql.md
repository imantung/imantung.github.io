---
layout: gist
title: psql
---


```

# show all database
\list
\l

# connect to database 
\connect DATABASE
\c DATABASE

# show table
\dt 

# show table + indices
\d+

```


Get columns through query
```sql
SELECT *
FROM information_schema.columns
WHERE table_schema = 'your_schema'
  AND table_name   = 'your_table'
```
