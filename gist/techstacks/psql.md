---
layout: gist
title: Postgres
---

### PSql

Connect to spesific database
```sh
psql -d DATABASE
psql -d postgres
```

Psql
```
\l            #list
\c DATABASE   # connect db
\dt           # show table
\d+           # show table + indices
```

### Query

Get columns through query
```sql
SELECT *
FROM information_schema.columns
WHERE table_schema = 'your_schema'
  AND table_name   = 'your_table'
```
