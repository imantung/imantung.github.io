---
layout: gist
title: Go
---

# Go

Good Read: 
- [project layout](https://github.com/golang-standards/project-layout/blob/master/README.md)
- [Go for Industrial Programming - Gopher EU 2018](https://peter.bourgon.org/go-for-industrial-programming/)
- [good article about http service](https://medium.com/statuscode/how-i-write-go-http-services-after-seven-years-37c208122831)
- [Style guideline for Go packages](https://rakyll.org/style-packages/)
- [when is the init function run](https://stackoverflow.com/questions/24790175/when-is-the-init-function-run)
- [CodeReviewComment](https://github.com/golang/go/wiki/CodeReviewComments)
- [Shrink your go binaries with this one weird trick](https://blog.filippo.io/shrink-your-go-binaries-with-this-one-weird-trick/)
- [Production Ready Connection Pooling](https://making.pusher.com/production-ready-connection-pooling-in-go/)
- [Uber Go Style](https://github.com/uber-go/guide)
- <https://blog.kowalczyk.info/book/go-cookbook.html>
- <https://curtisvermeeren.github.io/2017/09/14/Golang-Templates-Cheatsheet>
- <https://stackoverflow.com/questions/30612611/what-does-go-build-build/47109875#47109875>
- <https://github.com/cloudfoundry/go-diodes>

### SETUP

```bash
brew install go
mkdir $HOME/go && cd $HOME/go && mkdir bin pkg src && cd -
echo "export GOPATH=$HOME/go
export PATH=$PATH:$GOPATH/bin
" >> ~/.zshrc
source ~/.zshrc  
```





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


### PROFILING

- `runtime/pprof`
- `github.com/pkg/profile`: simple profiling library (for research/example)


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




### GOOS/GOARCH

[More detail list](https://gist.github.com/asukakenji/f15ba7e588ac42795f421b48b8aede63)

Or run command 
```bash
go tool dist list
```

| $GOOS	| $GOARCH |
|---|---|
|darwin|amd64|
|linux|amd64|
|windows|amd64|

### Profiling

- <https://github.com/golang/go/wiki/Performance>
- <https://artem.krylysov.com/blog/2017/03/13/profiling-and-optimizing-go-web-applications/>

### Context

- `WithValue`: the process may need this value
- `WithCancel`: the process can be cancelled
- `WithDeadline`: the process can be expired
- `WithTimeout`: same with `WithDeadline`


### Module

- <https://arslan.io/2019/08/02/why-you-should-use-a-go-module-proxy/>

### Debug

```go
// ElapsedTimeFn to print elapsed time of function
func ElapsedTimeFn(name string) func() {
	start := time.Now()
	return func() {
		log.Debugf("%s took %v\n", name, time.Since(start))
	}
}
```