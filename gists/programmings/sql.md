---
layout: gist
title: SQL
category: Programmings
---

# SQL

Ref: 
- [SQL Style Guide](https://www.sqlstyle.guide/)


## Postgres

remove duplicate row without primary key
```sql
DELETE FROM table_name
WHERE ctid IN (
   SELECT ctid
   FROM (SELECT ctid, row_number() OVER( PARTITION BY column_name ORDER BY column_name ) AS row_num, * FROM table_name) t
   WHERE t.row_num > 1);
```