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
buff.WriteString("some string")
```

### Test

Using http recorder
```go
func TestHealthCheckHandler(t *testing.T) {
    // create request
    req, err := http.NewRequest("GET", "/health-check", nil)
    if err != nil {
        t.Fatal(err)
    }
    
    // create recorder
    rr := httptest.NewRecorder()
    handler := http.HandlerFunc(HealthCheckHandler)

    // serve
    handler.ServeHTTP(rr, req)

    // Check the status code is what we expect.
    if status := rr.Code; status != http.StatusOK {
        t.Errorf("handler returned wrong status code: got %v want %v",
            status, http.StatusOK)
    }

    // Check the response body is what we expect.
    expected := `{"alive": true}`
    if rr.Body.String() != expected {
        t.Errorf("handler returned unexpected body: got %v want %v",
            rr.Body.String(), expected)
    }
}
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
