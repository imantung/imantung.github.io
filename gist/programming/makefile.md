---
layout: gist
title: Makefile
category: programming
---

# Makefile

- [tutorial](https://opensource.com/article/18/8/what-how-makefile)

suppress echoing the actually command using `@`
```make
say_hello:
        @echo "Hello World"
```

override default goal
```make
.DEFAULT_GOAL := generate
```

add special phony target (by default after make is filename)
```make
.PHONY: sample test mock
```

Looping through list
```make
dirs = $(shell ls)
clean:
    @$(foreach dir,$(dirs),echo $(dir);)
```
