---
layout: post
title: "Mustache & ENOENT"
date: 2017-08-24 05:34:20 +0700
tags: ["ruby"]
---

```
Failure/Error: request_body = Mustache.render(body,data)

   Errno::ENOENT:
     No such file or directory - ./mustache.mustache
```

This error lead me to 2 hour for finding the solution. So the problem is because I change the variable type from string to JSON. It's seem that Mustache(1.0.5) can't render json type, so we need to generate json string first.

```
request_body = Mustache.render(JSON.generate(body),data)
```

`ENOENT` is stand of Error No Entry or Error No Entity. Yea it's right json is not right entry for mustache but telling "no such file or directory" is really helping me.
