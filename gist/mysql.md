---
layout: gist
title: MySQL
---

[Timeseries database using MySQL](https://dba.stackexchange.com/questions/190756/what-is-the-optimal-solution-for-storing-real-time-time-series-in-mariadb-mysq)

[JDBC Driver TimeZone issue](https://stackoverflow.com/questions/26515700/mysql-jdbc-driver-5-1-33-time-zone-issue)
```sql
SET GLOBAL time_zone = '+3:00';
```

[server-error-reference](https://dev.mysql.com/doc/refman/5.5/en/server-error-reference.html)

[How max prepare stmt count bring down the production mysql system](https://medium.com/searce/how-max-prepared-stmt-count-bring-down-the-production-mysql-system-6ca28e577663)
[Who's leaking prepared statements](http://mysqlblog.fivefarmers.com/2012/07/05/whos-leaking-prepared-statements/)

## Logs

Log Type
- [mysqlbinlog](https://www.thegeekstuff.com/2017/08/mysqlbinlog-examples/)
- auditlog
- slowquerylog

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
