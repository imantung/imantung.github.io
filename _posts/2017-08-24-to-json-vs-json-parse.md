---
layout: post
title: "to_json VS JSON.parse()"
date: 2017-08-24 06:32:20 +0700
tags: ["ruby"]
---
One thing about ruby that I love (or hate) that we can literally read it aloud on conversation language and programmatically still working.
```
3.times do
  # something
end
```

However for handling json type, we should noted that `"quoted text"` actually valid json format therefore we can't casually write `s.to_json` to convert text to json object but instead use `JSON.parse()`

```
s = '{"hello": "world"}'

# Wrong
# Output => "\"{\\\"hello\\\": \\\"world\\\"}\""
s.to_json

# Right
# Output => {"hello"=>"world"}
JSON.parse(s)

m = {hello: 'world'}

# Right
# Output => "{\"hello\":\"world\"}"
m.to_json

```

Conclusion: Use `.to_json` if the variable is map. Use `JSON.parse()` if the variable is string. The same thing with `.to_s` and `JSON.generate()`
