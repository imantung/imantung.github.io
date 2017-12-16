---
layout: post
title: "Use 'Actions' as Table Name"
date: 2017-08-25 12:14:16 +0700
tags: ["ruby"]
---
[Naming is one of hard things in computer science](https://martinfowler.com/bliki/TwoHardThings.html) and I TOTALLY AGREE. Not only make a good, descriptive and cool name is hard, but wrong name bring you bad luck.

This is one of my rails story. I have entity (table/model/active record/whatever you called it) named as `Suspension`. This name not longer good make sense for our scope, so I renamed it to `Action` and this is what happened.

```ruby
undefined method `permit' for "create":String
```

So action is already used as field on rails generated form.
```ruby
{
  "utf8"=>"✓",
  "authenticity_token"=>"some token",
  "query"=>{"name"=>"asdf"},
  "controller"=>"queries",
  "action"=>"create"
}
```

Then I renamed it to `Callback`. Guess what happened? Rails already have Callback class. I do missed java with all its exports in deep of my heart.

```ruby
undefined method `new' for ActiveSupport::Callbacks::Callback:Class
```

It's not so easy rename the scaffold, you must renamed model, controller, view, spec and everything manually. Actually there is some tool called [RailsRefactor](https://github.com/jcrisp/rails_refactor), but I don't know how it's work and feel insecure if something change my code without my knowing.

Check [rails reserved word list](http://reservedwords.herokuapp.com/) 
