---
layout: gist
title: Go (Test)
---

# Go (Test)


Test failed if test coverage below 80%
```go
func TestMain(m *testing.M) {
    // call flag.Parse() here if TestMain uses flags
    rc := m.Run()

    // rc 0 means we've passed,
    // and CoverMode will be non empty if run with -cover
    if rc == 0 && testing.CoverMode() != "" {
        c := testing.Coverage()
        if c < 0.8 {
            fmt.Println("Tests passed but coverage failed at", c)
            rc = -1
        }
    }
    os.Exit(rc)
}
```

Mocking using [GoMock](https://github.com/golang/mock)
```bash
# install gomock
go get github.com/golang/mock/gomock
go install github.com/golang/mock/mockgen

mockgen -source=flow/kafka_admin.go -destination=flow/mock_kafka_admin.go -package=flow
```

Cover mode <https://blog.golang.org/cover>
```bash
go test -covermode=set # did each statement run? 
go test -covermode=count # how many times did each statement run?
go test -covermode=atomic # like count, but counts precisely in parallel programs
```

Get coverage rate ([source](https://github.com/vieux/gocover.io/blob/master/workers/gocover.sh))
```bash
go test -covermode=count -coverprofile=coverage.out ./internal/... | grep coverage | cut -d ' ' -f 2 | sed 's/%//g'
```

## Benchmarking

Interpreting result
```
BenchmarkCountParallel-2   	   10000	    163742 ns/op	       0 B/op	       0 allocs/op
```
- `2`: num procs
- `1000`: number of interation run
- `163742 ns/op`: average time each function call takes to complete
- `0 B/op`: memory block (present because of the -benchmem flag)