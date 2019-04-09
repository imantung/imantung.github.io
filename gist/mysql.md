---
layout: gist
title: MySQL
---

[JDBC Driver TimeZone issue](https://stackoverflow.com/questions/26515700/mysql-jdbc-driver-5-1-33-time-zone-issue)
```sql
SET GLOBAL time_zone = '+3:00';
```

[mysqlbinlog](https://www.thegeekstuff.com/2017/08/mysqlbinlog-examples/)

## Cheatsheet

In bash/terminal
```bash
# run the client
mysql -u root -p

# execute sqlscript
mysql < yourfile.sql
mysql db_name < yourfile.sql
```

In mysql interactive client
```sql
-- show database
show databases

-- switch database
connect [dbname]

-- execute ssql script
source yourfile.sql
```
