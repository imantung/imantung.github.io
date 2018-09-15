---
layout: gist
title: Postgres
---

### PSQL

Connect
```sh
psql -d DATABASE
psql -d postgres

# template1 is a database created by postgres itself, and is present on all installations
psql -d template1
```

Psql command
```
\l            #list
\c DATABASE   # connect db
\dt           # show table
\d+           # show table + indices
```
### Query

Create DB
```sql
CREATE DATABASE [name] 
```

Get columns through query
```sql
SELECT *
FROM information_schema.columns
WHERE table_schema = 'your_schema'
  AND table_name   = 'your_table'
```

Json 
```sql
SELECT * FROM table_name
WHERE json_field @> '[{"field":"value"}]'
```

### Extensions

[list of PostgreSQL extensions officially supported here](https://www.postgresql.org/docs/current/static/contrib.html)
[find 3rd party extensions](https://pgxn.org/)

```sql
-- list of installed extension
SELECT * FROM pg_extension

-- create
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- drop
DELETE EXTENSION IF EXISTS "uuid-ossp";

```
