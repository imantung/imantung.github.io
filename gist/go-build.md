---
layout: gist
title: Go (Build)
---


# Go (Build)

Linter: 
- <https://github.com/golangci/golangci-lint#install>


### C Cross Compiler

- <https://github.com/mattn/go-sqlite3/issues/384>

For linux: 
```
brew install FiloSottile/musl-cross/musl-cross

CC=x86_64-linux-musl-gcc CXX=x86_64-linux-musl-g++ GOARCH=amd64 GOOS=linux CGO_ENABLED=1 go build -ldflags "-linkmode external -extldflags -static"
```

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

```bash
go build -ldflags "-X main.version=0.0.1 -X main.date=%date:~10,4%-%date:~4,2%-%date:~7,2%T%time:~0,2%:%time:~3,2%:%time:~6,2%"
```

### Makefile

Makefile reference:
- [thockin](https://github.com/thockin/go-build-template)
- [Golang: Don’t afraid of makefiles](https://sohlich.github.io/post/go_makefile/)
- [Azer makefile](https://github.com/azer/go-makefile-example)

### Go module 410 Gone 

```bash
$ export GO111MODULE=on
$ export GOPROXY=direct
$ export GOSUMDB=off
$ go get -v -u github.com/alessiosavi/GoGPUtils@v0.0.9
```