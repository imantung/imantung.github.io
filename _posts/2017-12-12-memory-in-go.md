---
layout: post
title: "Memory in Go"
date: 2017-12-12 20:14:18 +0700
tags: ["go", "memory allocation", "garbage collector", "pointer"]
comments: true
---


Few weeks ago I got opportunities on [GoJakarta](https://www.meetup.com/GoJakarta/) where I speak about basic concept on memory management, pointers and garbage collector. 

On first part, I give some briefing information of classic [stack](https://en.wikipedia.org/wiki/Stack-based_memory_allocation) and [heap](https://en.wikipedia.org/wiki/Memory_management#HEAP) allocation. Golang already have [Escape Analysis](https://en.wikipedia.org/wiki/Escape_analysis) and we can use that to check when variable move from stack to heap.

The next part is [pointers](https://en.wikipedia.org/wiki/Pointer_%28computer_programming%29). I quite familiar with pointer because I start learn programming from C/C++ language. As far as I know, there is no popular programming language have this feature and now it appear again on Golang. I called pointer as god feature which is allow us to manipulate memory address (actually it just store memory address and used it :-p). However golang pointer is simpler than C/C++ because we doesn't need deallocate our pointer and no arithmetic support for pointer. Younger coder may have difficulty on this, so I provide some simple example.

The last but not least is [garbage collector](https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)) (GC). Everyone know about Java GC and want better GC. Before version 1.5, many people still prefer Java GC because of its maturity and a lot of tuning option. But version 1.5 and later, Golang is a winner with better and realtime GC.


Check my full presentation at [slideshare](https://www.slideshare.net/ImanTunggono/memory-in-go-82654871)
