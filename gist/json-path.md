---
layout: gist
title: JSON Path
---

Expressions to refer to specific json structure

[Online Evaluator](http://jsonpath.com/)

Cheatsheet

| Function | Description | Example | Result |
|---|---|---|---|
|text|the plain text|kind is `{.kind}`|kind is List|
|`@`|the current object|{@}|the same as input|
|`.` or `[]`|child operator|`{.kind}` or `{[‘kind’]}`|List|
|`..`|recursive descent|`{..name}`|127.0.0.1 127.0.0.2 myself e2e|
|`*`|wildcard. Get all objects|{.items[*].metadata.name}|[127.0.0.1 127.0.0.2]|
|`[start:end :step]`|subscript operator|`{.users[0].name}`|myself|
|`[,]`|union operator|`{.items[*][‘metadata.name’, ‘status.capacity’]}`|127.0.0.1 127.0.0.2 map[cpu:4] map[cpu:8]|
|`?()`|filter|`{.users[?(@.name==“e2e”)].user.password}`|secret|
|`range, end`|iterate list|`{range .items[*]}[{.metadata.name}, {.status.capacity}] {end}`|[127.0.0.1, map[cpu:4]] [127.0.0.2, map[cpu:8]]|
|`“`|quote interpreted string|`{range .items[*]}{.metadata.name}{’\t’}{end}`|127.0.0.1 127.0.0.2|