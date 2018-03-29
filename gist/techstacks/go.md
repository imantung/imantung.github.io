---
layout: gist
title: go
---

### IO

Reader from strings package for reader unit testing or debug
```go
strings.NewReader("some string\n")
```

Buffer from bytes package for writer unit testing or debug or concatenate string
```go
buff := bytes.Buffer{}
buff.ReadString("some string")
```


### Vendoring

```sh
brew install glide

glide create # create glide.yaml 
glide install # start pulling
glide up # update version

```

### Libraries

- Command Line Interface: github.com/urfave/cli
- Logging: github.com/Sirupsen/logrus


### GOOS/GOARCH

| $GOOS	| $GOARCH |
android|arm|
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
