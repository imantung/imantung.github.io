---
layout: gist
title: Go Test
---

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

Install [GoMock](https://github.com/golang/mock)
```sh
go get github.com/golang/mock/gomock
go install github.com/golang/mock/mockgen
```

Mocking
```sh
mockgen -source=flow/kafka_admin.go -destination=flow/mock_kafka_admin.go -package=flow
```
