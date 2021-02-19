---
layout: gist
title: Redis
---

# Redis

default port: `6379`

Tool:
- [Redis Sentinel](https://redis.io/topics/sentinel): monitoring, notification, automatic failover, configuration provider
- [Redis Cluster](https://redis.io/topics/cluster-tutorial): distributed; data sharding
- [Twemproxy](https://github.com/twitter/twemproxy): proxy for memcached and redis by twitter
- [Crucial monitor metrics](https://scalegrid.io/blog/6-crucial-redis-monitoring-metrics/)


Ref: 
- <https://blog.houzz.com/migration-to-redis-cluster/>


## Cheatsheet

Command Line
```bash
# install 
brew install redis

# command line 
redis-cli
redis-cli -h HOST -p PORT

# streams back every command processed (for debugging)(expensive operation)
redis-cli monitor

# benchmarking
src/redis-benchmark -c 10 -n 100000 -q
```

## Redis-Cli

show all list
```
LRANGE key 0 -1  
```

show all keys
```
KEYS *
```

## Configuration

Ref:
- https://iamabhishek-dubey.medium.com/redis-best-practices-and-performance-tuning-c48611388bbc

Some guides:
- `Maximum memory` — By default redis have no memory limits on 64-bit systems and 3 GB on 32-bit systems. Large memory can contain more data and increase hit ratio, one of the most important metrics but at a certain limit of memory the hit rate will be at the same level.

- `Eviction algorithms` — When cache size reaches the memory limit, old data is removed to make place for new one. Access pattern is a keyword when you thinking about eviction policies, each strategy will be good for specific case:

    - `Last Recently Used (LRU)` track when key was used last time. So probably it will be still used in future, but what if it was only ‘one shot’ before long idle time? Key will be stored to next eviction cycle.
    - `Least Frequently Used (LFU)` [Available from Redis 4.0] will count how many times key was used. The most popular keys will survive eviction cycle. Problem appears when key was used very often some time ago. Another key starts to being requested but it still have smaller counter and will be candidate to eviction (Redis team solved problem with long lived keys by decreasing counter after some period of time).

- `Durability` — For some reasons you may want to persist your cache. After startup, cache is initially empty, it will be useful to fulfill it with snapshot data in case of recovery after outage. Redis support three types of persistence:

  - `RDB` point-in-time snapshots after specific interval of time or amount of writes. Rare snapshots should not harm performance but it will be a good task trying to find balance between snapshot interval and to avoid serving obsolete data after outage.
  - `AOF` create persistence logs with every write operation. If you consider this level of durability, you should read about different fsync policies under appendfsync configuration parameter.
  - Both `RDB` and `AOF`.

```
#memory limit up to 128MB (up to you)
maxmemory 128mb
#remove the last recently used (LRU) keys first
maxmemory-policy allkeys-lru
#eviction precision (up to you)
maxmemory-samples 10
```

## Metrics 

- Hit/miss ratio
    ```
    $ redis-cli info stats
    ...
    keyspace_hits:142   #Successful lookups
    keyspace_misses:26  #Failed lookups
    ...
    ```
    Formula:
    ```
    hit_ratio  =(keyspace_hits)/(keyspace_hits + keyspace_misses)
    miss_ratio = (keyspace_misses)/(keyspace_hits + keyspace_misses)
    ```
- Latency
    ```
    $ redis-cli --latency -h 127.0.0.1 -p 6379
    min: 0, max: 16, avg: 0.15 (324531 samples)...
    ```
- Fragmentation Ratio:  Redis will always use more memory than you declared in `maxmemory` for himself and e.g. to keeps keys metadata but high ratio can be first signal of memory fragmentation.
    ```
    $ redis-cli info memory
    ...
    used_memory_human:41.22M
    ...
    used_memory_rss_human:50.01M
    ...
    mem_fragmentation_ratio:1.21 #used_memory_rss/used_memory
    ...
    ```


