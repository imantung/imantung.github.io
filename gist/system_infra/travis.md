---
layout: gist
title: Travis CI
category: System Infra
---

# Travis CI

> Test and Deploy Your Code with Confidence


[Customizing The Build](https://docs.travis-ci.com/user/customizing-the-build/)

Life Cycle: 
1. OPTIONAL Install `apt addons`
2. OPTIONAL Install `cache components`
3. `before_install`
4. `install`
5. `before_script`
6. `script`
7. OPTIONAL `before_cache` (for cleaning up cache)
8. `after_success` or `after_failure`
9. OPTIONAL `before_deploy`
10. OPTIONAL `deploy`
11. OPTIONAL `after_deploy`
12. `after_script`


## Go 

[Go Reference](https://docs.travis-ci.com/user/languages/go/)

```yml
language: go

go:
  - 1.9

notifications:
  email: false

install:
  - # skip

script:
  - go test ./...
  - GOOS=linux GOARCH=arm go build -o barito-flow-linux
  - GOOS=darwin GOARCH=amd64 go build -o barito-flow-darwin

deploy:
  provider: releases
  skip_cleanup: true
  api_key: $GITHUB_TOKEN
  file:
    - barito-flow-linux
    - barito-flow-darwin
  on:
    tags: true
    repo: BaritoLog/barito-flow
    all_branches: true
```



Using go latest version 
```
go:
  - tip
```



### Github

Got problem: 
```
Skipping a deployment with the releases provider because this is not a tagged commit
```

[Workaround](https://github.com/travis-ci/travis-ci/issues/5026) --> remove the `branches`
