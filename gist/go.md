---
layout: gist
title: Go
---

Good Read: 
- [project layout](https://github.com/golang-standards/project-layout/blob/master/README.md)
- [Go for Industrial Programming - Gopher EU 2018](https://peter.bourgon.org/go-for-industrial-programming/)
- [good article about http service](https://medium.com/statuscode/how-i-write-go-http-services-after-seven-years-37c208122831)
- [Style guideline for Go packages](https://rakyll.org/style-packages/)
- [when is the init function run](https://stackoverflow.com/questions/24790175/when-is-the-init-function-run)
- [Go for Industrial Programming](https://peter.bourgon.org/go-for-industrial-programming/#the-component-graph)

### SETUP

```sh
brew install go
mkdir $HOME/go && cd $HOME/go && mkdir bin pkg src && cd -
echo "export GOPATH=$HOME/go
export PATH=$PATH:$GOPATH/bin
" >> ~/.zshrc
source ~/.zshrc  
```

### C Cross Compiler

https://github.com/mattn/go-sqlite3/issues/384

For linux: 
```
brew install FiloSottile/musl-cross/musl-cross

CC=x86_64-linux-musl-gcc CXX=x86_64-linux-musl-g++ GOARCH=amd64 GOOS=linux CGO_ENABLED=1 go build -ldflags "-linkmode external -extldflags -static"
```


### Test

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

Gomock snippet
```go
ctrl := gomock.NewController(t)
defer ctrl.Finish()
```

### Reflect

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


### PROFILING

- `runtime/pprof`
- `github.com/pkg/profile`: simple profiling library (for research/example)


### LDFLAG

Use `-ldflag` to override main variable
```go
package main

import "fmt"

var (
    version string
    date    string
)

func main() {
    fmt.Printf("version=%s, date=%s", version, date)
}
```
```sh
go build -ldflags "-X main.version=0.0.1 -X main.date=%date:~10,4%-%date:~4,2%-%date:~7,2%T%time:~0,2%:%time:~3,2%:%time:~6,2%"
```

### IO

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

### Mocking

Install [GoMock](https://github.com/golang/mock)
```sh
go get github.com/golang/mock/gomock
go install github.com/golang/mock/mockgen
```

Mocking
```sh
mockgen -source=flow/kafka_admin.go -destination=flow/mock_kafka_admin.go -package=flow
```

### Vendoring

Using [glide](https://glide.sh/)
```sh
brew install glide

glide create # create glide.yaml
glide install # start pulling
glide up # update version
```

Using [dep](https://golang.github.io/dep/)
```sh
brew install dep

dep init
dep ensure
dep ensure -add github.com/foo/bar github.com/baz/quux
dep ensure -update
```

### Makefile

Makefile reference:
- [thockin](https://github.com/thockin/go-build-template)
- [Golang: Don’t afraid of makefiles](https://sohlich.github.io/post/go_makefile/)
- [Azer makefile](https://github.com/azer/go-makefile-example)


### GOOS/GOARCH

| $GOOS	| $GOARCH |
|---|---|
|android|arm|
|darwin|386|
|darwin|amd64|
|darwin|arm|
|darwin|arm64|
|dragonfly|amd64|
|freebsd|386|
|freebsd|amd64|
|freebsd|arm|
|linux|386|
|linux|amd64|
|linux|arm|
|linux|arm64|
|linux|ppc64|
|linux|ppc64le|
|linux|mips|
|linux|mipsle|
|linux|mips64|
|linux|mips64le|
|linux|s390x|
|netbsd|386|
|netbsd|amd64|
|netbsd|arm|
|openbsd|386|
|openbsd|amd64|
|openbsd|arm|
|plan9|386|
|plan9|amd64|
|solaris|amd64|
|windows|386|
|windows|amd64|


