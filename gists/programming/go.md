---
layout: gist
title: Go
category: Programming & Coding
---

# Go

Ref: 
- [project layout](https://github.com/golang-standards/project-layout/blob/master/README.md)
- [Go for Industrial Programming - Gopher EU 2018](https://peter.bourgon.org/go-for-industrial-programming/)
- [Style guideline for Go packages](https://rakyll.org/style-packages/)
- [CodeReviewComment](https://github.com/golang/go/wiki/CodeReviewComments)
- [Uber Go Style](https://github.com/uber-go/guide)
- [when is the init function run](https://stackoverflow.com/questions/24790175/when-is-the-init-function-run)
- <https://blog.kowalczyk.info/book/go-cookbook.html>



## Build

Ref:
- [Linter](https://github.com/golangci/golangci-lint#install)
- [go-module-proxy](https://arslan.io/2019/08/02/why-you-should-use-a-go-module-proxy/)
- [What does go build build](https://stackoverflow.com/questions/30612611/what-does-go-build-build/47109875#47109875)
- [pragma/build directive](https://dave.cheney.net/2018/01/08/gos-hidden-pragmas)
- [Shrink your go binaries with this one weird trick](https://blog.filippo.io/shrink-your-go-binaries-with-this-one-weird-trick/)

Go module 410 Gone 
```bash
$ export GO111MODULE=on
$ export GOPROXY=direct
$ export GOSUMDB=off
$ go get -v -u github.com/alessiosavi/GoGPUtils@v0.0.9
```

Use `-ldflag` to override main variable
```go
var version string
var date string

func main() {
    fmt.Printf("version=%s, date=%s", version, date)
}
```

```bash
go build -ldflags "-X main.version=0.0.1 -X main.date=%date:~10,4%-%date:~4,2%-%date:~7,2%T%time:~0,2%:%time:~3,2%:%time:~6,2%"
```

[Goos/Goarc list](https://gist.github.com/asukakenji/f15ba7e588ac42795f421b48b8aede63)
```bash
go tool dist list
```

| $GOOS	| $GOARCH |
|---|---|
|darwin|amd64|
|linux|amd64|
|windows|amd64|



## Test


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

## Mock

Mocking using [GoMock](https://github.com/golang/mock)
```bash
# install gomock
go get github.com/golang/mock/gomock
go install github.com/golang/mock/mockgen

mockgen -source=flow/kafka_admin.go -destination=flow/mock_kafka_admin.go -package=flow
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

### Interfaces 

Reference:
- [Scanner-Values for custom database type](https://husobee.github.io/golang/database/2015/06/12/scanner-valuer.html)
- [JsonMarshalling for custom type](http://choly.ca/post/go-json-marshalling/)

Implements of `io.Reader`
```go
strings.NewReader("some string\n")
bytes.NewReader([]byte{})
```

Implements of `io.Writer`
```go
buff := bytes.Buffer{}
buff.WriteString("some string")
```

Reader to ReaderClose
```go
ioutil.NopCloser(reader)
```


### PROFILING/OPTIMIZATION

Ref:
- `runtime/pprof` general package
- `net/http/pprof` http package
- `github.com/pkg/profile`: Example 
- <https://github.com/golang/go/wiki/Performance>
- <https://artem.krylysov.com/blog/2017/03/13/profiling-and-optimizing-go-web-applications/>

[expvar package](https://golang.org/pkg/expvar/)
```go
import _ "expvar"

// URL Path:
// /debug/vars
```

[pprof package](https://github.com/google/pprof/tree/master/doc)
```go
import _ "net/http/pprof"

// URL Path
// /debug/pprof/
// /debug/pprof/cmdline
// /debug/pprof/profile
// /debug/pprof/symbol
// /debug/pprof/trace
// /debug/pprof/goroutine
// /debug/pprof/threadcreate
// /debug/pprof/heap
// /debug/pprof/block
```

## Graceful Shutdown

```go
exitCh := make(chan os.Signal)
signal.Notify(exitCh, syscall.SIGTERM, syscall.SIGINT)

var errs errkit.Errors
go func() {
    defer func() { exitCh <- syscall.SIGTERM }()
    // start
}()
<-exitCh

// shutdown
```

## Context

- `WithValue`: the process may need this value
- `WithCancel`: the process can be cancelled
- `WithDeadline`: the process can be expired
- `WithTimeout`: same with `WithDeadline`


## Reflection 

Print function of packages
```go
subPackage := "app/controller"

set := token.NewFileSet()
packs, err := parser.ParseDir(set, subPackage, nil, 0)
if err != nil {
	fmt.Println("Failed to parse package:", err)
	os.Exit(1)
}

// funcs := []*ast.FuncDecl{}
for _, pack := range packs {
	for _, f := range pack.Files {
		for _, d := range f.Decls {
			if fn, isFn := d.(*ast.FuncDecl); isFn {
				// funcs = append(funcs, fn)
				fmt.Println(fn.Name)

			}
		}
	}
}
```

Assign pointer to other with reflection
```go
n := 42
p := &n

x := new(int)
// set the value to *x, but x must be initialized
reflect.ValueOf(x).Elem().Set(reflect.ValueOf(p).Elem())
fmt.Println("*x:", *x)

var y *int
// to set the value of y directly, requires y be addressable
reflect.ValueOf(&y).Elem().Set(reflect.ValueOf(p))
fmt.Println("*y:", *y)
```

Get Package Name
```go
// If the type was predeclared (string, error) or not defined (*T, struct{},
// []int, or A where A is an alias for a non-defined type), the package path
// will be the empty string.
func packageName(v interface{}) string {
	val := reflect.ValueOf(v)
	if val.Kind() == reflect.Ptr {
		return val.Elem().Type().PkgPath()
	}
	return val.Type().PkgPath()
}
```

## AST


ref:
- <https://stackoverflow.com/questions/47088551/get-all-info-about-a-package-via-importer-and-reflect>

Print the ast
```go
ast.Print(fset, v)
```

Inspect
```go
func inspect(n ast.Node) {
	ast.Inspect(n, func(n ast.Node) bool {
		var s string
		switch x := n.(type) {
		case *ast.BasicLit:
			s = x.Value
		case *ast.Ident:
			s = x.Name
		}
		if s != "" {
			fmt.Printf("%s:\t%s\n", fset.Position(n.Pos()), s)
		}
		return true
	})
}
```

To String
```go
func toString(v interface{}) string {
	var buf bytes.Buffer
	err := printer.Fprint(&buf, fset, v)
	if err != nil {
		log.Fatal(err)
	}
	return buf.String()
}
```
