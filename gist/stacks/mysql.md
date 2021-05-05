---
layout: gist
title: MySQL
category: Tech Stack & Tool
---

# MySQL

[Timeseries database using MySQL](https://dba.stackexchange.com/questions/190756/what-is-the-optimal-solution-for-storing-real-time-time-series-in-mariadb-mysq)

[JDBC Driver TimeZone issue](https://stackoverflow.com/questions/26515700/mysql-jdbc-driver-5-1-33-time-zone-issue)
```sql
SET GLOBAL time_zone = '+3:00';
```


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

## Check connection

Ref
- https://stackoverflow.com/questions/6502036/how-can-i-see-how-many-mysql-connections-are-open
- https://meta.wikimedia.org/wiki/Why_persistent_connections_are_bad

```sql
mysql -e 'SHOW STATUS WHERE variable_name LIKE "Threads_%" OR variable_name = "Connections"'
```

- `Connections`: The number of connection attempts (successful or not) to the MySQL server.
- `Threads_cached`: The number of threads in the thread cache.
- `Threads_connected`: The number of currently open connections.
- `Threads_created`: The number of threads created to handle connections. If Threads_created is big, you may want to increase the thread_cache_size value. The cache miss rate can be calculated as Threads_created/Connections.
- `Threads_running`: The number of threads that are not sleeping.


## Config

check variable
```sql
show variables like "%stmt%";
```

Check global status:
```sql
show global status like "%stmt%";
```

Check MySQL Global:
```sql
SELECT * FROM stats_mysql_global WHERE variable_name LIKE '%stmt%';
```
  - Check if `Com_backend_stmt_close` = 0 (complete)
  - Check `Stmt_Max_Stmt_id` means there are (n - 1) total application has executed . 
  - Check `Stmt_Server_Active_Total` for current prepare statement


## Troubleshoot

[server-error-reference](https://dev.mysql.com/doc/refman/5.5/en/server-error-reference.html)

Check Process List 
```bash
mysql -uroot -e 'SHOW PROCESSLIST' 
```

Check Performance Schema
```sql
SELECT sp.thread_id, t.processlist_user user, t.processlist_host host,
sp.count_star - sd.count_star open_com_query_ps,
cp.count_star - cc.count_star open_com_prepare_ps
FROM
( SELECT COUNT_STAR,
THREAD_ID
FROM events_statements_summary_by_thread_by_event_name
WHERE event_name = 'statement/sql/prepare_sql' ) sp
JOIN
( SELECT COUNT_STAR,
THREAD_ID
FROM events_statements_summary_by_thread_by_event_name
WHERE event_name = 'statement/com/Prepare' ) cp
ON (cp.THREAD_ID = sp.THREAD_ID)
JOIN
( SELECT COUNT_STAR,
THREAD_ID
FROM events_statements_summary_by_thread_by_event_name
WHERE event_name = 'statement/sql/dealloc_sql' ) sd
ON (sd.THREAD_ID = sp.THREAD_ID)
JOIN
( SELECT COUNT_STAR,
THREAD_ID
FROM events_statements_summary_by_thread_by_event_name
WHERE event_name = 'statement/com/Close stmt' ) cc
ON (cc.THREAD_ID = sp.THREAD_ID)
JOIN threads t ON (t.thread_id = sp.thread_id)
ORDER BY GREATEST(open_com_query_ps, open_com_prepare_ps) DESC;
```


## Max Prepared Statement issue

Reference:
- https://github.com/sysown/proxysql/issues/1251
- http://mysqlblog.fivefarmers.com/2012/07/05/whos-leaking-prepared-statements/
- [How max prepare stmt count bring down the production mysql system](https://medium.com/searce/how-max-prepared-stmt-count-bring-down-the-production-mysql-system-6ca28e577663)
- [Who's leaking prepared statements](http://mysqlblog.fivefarmers.com/2012/07/05/whos-leaking-prepared-statements/)


Get conclusion:
- If prepared statements / connection is continuously growing, your application has leak.
- If your application code is fine, there may be leak in database/sql or this driver.
- If you believe your code is fine and there is leak in driver, please write reproducible example which leak statement continuously.

## SQLProxy
  
```sql
select * from stats_mysql_commands_counters where Command in ('PREPARE', 'EXECUTE', 'SELECT');
```
