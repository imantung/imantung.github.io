---
layout: gist
title: Redis
---

default port: `6379`

[Twemproxy](https://github.com/twitter/twemproxy): proxy for memcached and redis


### Cheatsheet

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

# Redis-Cli

```
<!-- show all list -->
LRANGE key 0 -1  

<!-- show all keys -->
KEYS *
```



