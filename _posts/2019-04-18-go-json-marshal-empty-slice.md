---
layout: post
title: "Golang Json.Marshal() return null for empty slice"
description: "Golang Json.Marshal() return null for empty slice"
date: 2019-04-18 21:39:00 +0700
tags: ["go"]
comments: false
---

Today I found out that `json.Marshal()` weirdly return `null` for empty slice but make sense.
```go
var slice []string
b, _ := json.Marshal(slice)
fmt.Println(string(b)) // print `null`
```

The workaround is to initiate empty slice using `make()` function. 
```go
var slice []string
slice = make([]string, 0)
b, _ := json.Marshal(slice)
fmt.Println(string(b)) // print `[]`
```

I thought `make()` will make fixed length slice and `append()` will trigger error, but it totally fine.
```go
var slice []string
slice = make([]string, 0)
fmt.Println(len(slice)) // print 0

slice = append(slice, "some-string")
fmt.Println(len(slice)) // print 1

b, _ := json.Marshal(slice)
fmt.Println(string(b)) // print `["some-string"]`
```

Thanks [Dan Ott](https://danott.co/posts/json-marshalling-empty-slices-to-empty-arrays-in-go.html) for the insight
