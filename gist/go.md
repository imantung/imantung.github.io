---
layout: gist
title: Go
---

<!-- FIXME -->

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

pprof

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
```


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

### Makefile

Some template ([source](https://sohlich.github.io/post/go_makefile/))

```makefile
# Go parameters
GOCMD=go
GOBUILD=$(GOCMD) build
GOCLEAN=$(GOCMD) clean
GOTEST=$(GOCMD) test
GOGET=$(GOCMD) get
BINARY_NAME=mybinary
BINARY_UNIX=$(BINARY_NAME)_unix

all: test build
build: 
       $(GOBUILD) -o $(BINARY_NAME) -v
test: 
       $(GOTEST) -v ./...
clean: 
       $(GOCLEAN)
       rm -f $(BINARY_NAME)
       rm -f $(BINARY_UNIX)
run:
       $(GOBUILD) -o $(BINARY_NAME) -v ./...
       ./$(BINARY_NAME)
deps:
       $(GOGET) github.com/markbates/goth
       $(GOGET) github.com/markbates/pop


# Cross compilation
build-linux:
       CGO_ENABLED=0 GOOS=linux GOARCH=amd64 $(GOBUILD) -o $(BINARY_UNIX) -v
docker-build:
       docker run --rm -it -v "$(GOPATH)":/go -w /go/src/bitbucket.org/rsohlich/makepost golang:latest go build -o "$(BINARY_UNIX)" -v
```
