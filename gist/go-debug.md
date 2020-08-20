---
layout: gist
title: Go (Debug)
---

# Go (Debug)

## expvar

- <https://golang.org/pkg/expvar/>

```go
import _ "expvar"
```

URL Path
```
/debug/vars
```

## pprof

- <https://golang.org/pkg/runtime/pprof/>
- <https://github.com/google/pprof/blob/master/doc/README.md>

```go
import _ "net/http/pprof"
```

URL Path
```
/debug/pprof/
/debug/pprof/cmdline
/debug/pprof/profile
/debug/pprof/symbol
/debug/pprof/trace

/debug/pprof/goroutine
/debug/pprof/threadcreate
/debug/pprof/heap
/debug/pprof/block
```