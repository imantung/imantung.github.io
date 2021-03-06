---
layout: gist
title: Rails
category: Programmings
---

# Rails

### Application

```bash
rails new my_app --database=postgresql # create app
rails s # start
rails s -p 1234 # start with port 1234
rails c # console 
rake -T # list task
```

Scaffold
```bash
rails g scaffold product name:string price:decimal{7,2}
```

Check on [Heroku Reserved Words](http://reservedwords.herokuapp.com/) before naming

### Migration
```bash
rake db:drop
rake db:create
rake db:migrate
rake db:rollback
RAILS_ENV=test rake db:drop
```

Add column
```bash
rails g migration add_email_to_users email:string
```

Common Migration datatype
```bash
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

```bash
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

### Rake Task

Create rake task with argument
```bash
task :task1 => [:environment] do
  puts ENV['path']
end

task :task2 => [:environment] do
  puts ARGV[1]
end

task :task3, [:message] => :environment do |t, args|
  args.with_defaults(:path => "default")
  puts args.path
end
```

```bash
rake task1 path="your path"
rake task2 "your_path"
rake "task3[your_path]"
```
