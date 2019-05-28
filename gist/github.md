---
layout: gist
title: Github
---

[CodeOwner](https://help.github.com/en/articles/about-code-owners)
```
# This is a comment.
# Each line is a file pattern followed by one or more owners.

# These owners will be the default owners for everything in
# the repo. Unless a later match takes precedence,
# @global-owner1 and @global-owner2 will be requested for
# review when someone opens a pull request.
*       @global-owner1 @global-owner2

# Order is important; the last matching pattern takes the most
# precedence. When someone opens a pull request that only
# modifies JS files, only @js-owner and not the global
# owner(s) will be requested for a review.
*.js    @js-owner

# You can also use email addresses if you prefer. They'll be
# used to look up users just like we do for commit author
# emails.
*.go docs@example.com

# In this example, @doctocat owns any files in the build/logs
# directory at the root of the repository and any of its
# subdirectories.
/build/logs/ @doctocat

# The `docs/*` pattern will match files like
# `docs/getting-started.md` but not further nested files like
# `docs/build-app/troubleshooting.md`.
docs/*  docs@example.com

# In this example, @octocat owns any file in an apps directory
# anywhere in your repository.
apps/ @octocat

# In this example, @doctocat owns any file in the `/docs`
# directory in the root of your repository.
/docs/ @doctocat
``` 



### Golang Badge

```
[![GoDoc](https://godoc.org/github.com/sony/sonyflake?status.svg)](http://godoc.org/github.com/sony/sonyflake)
[![Build Status](https://travis-ci.org/sony/sonyflake.svg?branch=master)](https://travis-ci.org/sony/sonyflake)
[![Coverage Status](https://coveralls.io/repos/sony/sonyflake/badge.svg?branch=master&service=github)](https://coveralls.io/github/sony/sonyflake?branch=master)
[![Go Report Card](https://goreportcard.com/badge/github.com/sony/sonyflake)](https://goreportcard.com/report/github.com/sony/sonyflake)

```