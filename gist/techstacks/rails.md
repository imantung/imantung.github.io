---
layout: gist
title: Rails
---

### Application

[Reserved Word](http://reservedwords.herokuapp.com/)

```sh
rails new my_app --database=postgresql # create app
rails s # start
rails c # console 
rake -T # list task
```

Scaffold
```sh
rails g scaffold product name:string price:decimal{7,2}
```

### Migration
```sh
rails g migration add_email_to_users email:string

rake db:drop
rake db:create
rake db:migrate
rake db:rollback
RAILS_ENV=test rake db:drop
```


Common Migration datatype
```
:binary
:boolean
:date
:datetime
:decimal
:float
:integer
:bigint
:primary_key
:string
:text
:time
:timestamp
```

[Postgres specific datatype](https://github.com/rails/rails/blob/4-2-stable/activerecord/lib/active_record/connection_adapters/postgresql_adapter.rb#L76)

### Rspec

```sh
rspec
rspec spec/models/user.spec.rb
rspec spec/models/user.spec.rb:43
```


Spec for 'belong to'
```rb
assc = described_class.reflect_on_association(:user_group)
expect(assc.macro).to eq :belongs_to
```

Spec for presence of 
```rb
group = FactoryBot.build(:application_group, name: '')
expect(template).to_not be_valid
```


### Misc

1. If `RAILS_ENV` already defined at `application.yml`
```
WARNING: Skipping key "RAILS_ENV". Already set in ENV.
```
