---
layout: post
title: "Use 'Actions' for Table Name"
date: 2017-08-25 12:14:16 +0700
tags: ["ruby"]
---
Someone have told me that naming is actually one biggest problem in IT world and I TOTALLY AGREE. Not only make good, descriptive and cool name is hard, but wrong name bring you bad luck.

This is one of my rails story. I have entity (table/model/active record/whatever you called it) named as `Suspension`. This name not longer good in my perfective, so I changed to `Action` and this is happen when create.

```ruby
undefined method `permit' for "create":String
```

This is typically what params from rails generated form.

```ruby
{
  "utf8"=>"✓",
  "authenticity_token"=>"some token",
  "query"=>{"name"=>"asdf"},
  "controller"=>"queries",
  "action"=>"create"
}
```

Then I renamed it to `Callback` and again, rails already have class Callback. I do missed java with all its exports.
```
undefined method `new' for ActiveSupport::Callbacks::Callback:Class
```

It's not so easy rename the scaffold (model + controller + view + spec + everything), you must renamed it manually.
Actually there is some tool called [RailsRefactor](https://github.com/jcrisp/rails_refactor), but I don't know how it's work and feel insecure if something change my code without my knowing.

You may want to check [this list](http://reservedwords.herokuapp.com/) first
