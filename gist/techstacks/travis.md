---
layout: gist
title: Travis CI
---

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

```yml
language: go

go:
  - tip
  
branches:
  only:
    - master

notifications:
  email: false

script:
  - go test ./...
```

`tip`: latest version
