---
layout: gist
title: MySQL (Check Connection)
---

# MySQL (Check Connection)

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