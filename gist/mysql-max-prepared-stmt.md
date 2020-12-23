---
layout: gist
title: MySQL (Max Prepared Statement )
---

# MySQL (Max Prepared Statement)

Reference:
- https://github.com/sysown/proxysql/issues/1251
- http://mysqlblog.fivefarmers.com/2012/07/05/whos-leaking-prepared-statements/


Get conclusion:
- If prepared statements / connection is continuously growing, your application has leak.
- If your application code is fine, there may be leak in database/sql or this driver.
- If you believe your code is fine and there is leak in driver, please write reproducible example
which leak statement continuously.

### Check MySQL Variable/GlobalVariable

Check variable:
  - check `max_prepared_stmt_count`
```sql
show variables like "%stmt%";
```

Check global status:
  - check `prepared_stmt_count`: How many times statements has been `prepared` since last mysql server started
  - check `Com_stmt_execute`: How many times statements has been `executed` since last mysql server started
  - check `Com_stmt_close`: How many times statements has been `deallocated` since last mysql server started
```sql
show global status like "%stmt%";
```

Check MySQL Global:
  - Check if `Com_backend_stmt_close` = 0 (complete)
  - Check `Stmt_Max_Stmt_id` means there are (n - 1) total application has executed . 
  - Check `Stmt_Server_Active_Total` for current prepare statement
```sql
SELECT * FROM stats_mysql_global WHERE variable_name LIKE '%stmt%';
```
  
### Check SQLProxy

3. Check SQL Proxy (if anly)
  - check `mysql-max_stmts_per_connection`
  - check `mysql-max_stmts_cache`
  - check `stats_mysql_commands_counters`
  ```sql
select * from stats_mysql_commands_counters where Command in ('PREPARE', 'EXECUTE', 'SELECT');
  ```

### Check Process List 

```bash
mysql -uroot -e 'SHOW PROCESSLIST' 
```


### Check Performance Schema

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





