---
layout: gist
title: Ruby
---

### rbenv

```sh
brew install rbenv
echo 'eval "$(rbenv init -)"' >> ~/.zshrc
rbenv install --list
rbenv install 2.4.3
rbenv local 2.4.3 # set ruby for this project
rbenv global 2.4.3 # set ruby for global
source ~/.zshrc

ruby -v
which ruby
which bundle
gem env
```

If `Bundle` is not using rbenv ruby
```sh
gem install --no-ri --no-rdoc bundler
rbenv rehash
```

[Ruby vendoring](http://ryan.mcgeary.org/2011/02/09/vendor-everything-still-applies/)
```sh
bundle install --path vendor
echo 'vendor/ruby' >> .gitignore

bundle package
```

If install is missing. [solution](https://stackoverflow.com/questions/17618113/the-command-rbenv-install-is-missing)
```sh
git clone https://github.com/rbenv/ruby-build.git "$(rbenv root)"/plugins/ruby-build
```

Put gem executable at `/bin` folder
```sh
bundle install --binstubs
```


### ruby & bundle

Dependencies conflict
```
1. Remove `Gemfile.lock`
2. Check `Gemfile` fix the dependencies
3. Rerun `bundle install`
```

Gem development
```sh
gem build GEMNAME.gemspec
gem install gemname-version.gem 
gem push gemname-version.gem # update to https://rubygems.org/
```

Add gem owner 
```sh
gem owner EMAIL GEMNAME
```

### Parse RSS 

```rb
require 'rubygems'
require 'rss'
require 'open-uri'

@rss = RSS::Parser.parse('https://medium.com/feed/gojekengineering')
```

### Regex

To test a String against a Regex, you can do any of five things:

1. Use String#match:
  ```rb
  ' '.match /\s{1,}/    # => #<MatchData:0x118ca58>
  'f'.match /\s{1,}/    # => nil
  ```
2. Use Regex#match:
  ```rb
  /\s{1,}/.match ' '    # => <MatchData:0x11857e4>
  /\s{1,}/.match 'f'    # => nil
  ```
3: Use String#=~:
  ```rb
  ' ' =~ /\s{1,}/       # => 0
  'f' =~ /\s{1,}/       # => nil
  ```
4: Use Regex#=~:
  ```rb
  /\s{1,}/ =~ ' '       # => 0
  /\s{1,}/ =~ 'f'       # => nil
  ```
5: Use Regex#=== (this is what is used in case statements):
  ```rb
  /\s{1,}/ === ' '      # => true
  /\s{1,}/ === 'f'      # => false
  ```
  Note: String#=== doesn't do what you want:
  ```rb
  ' ' === /\s{1,}/      # => false
  'f' === /\s{1,}/      # => false
  ```


### Code Snippet

Change key name
```rb
hash[:new_key] = hash.delete :old_key
```

Compare array of string: `WithInDifferentAccess`

Class
```rb
class Example
  attr_reader :name, :age

  def initialize args
    args.each do |k,v|
      instance_variable_set("@#{k}", v) unless v.nil?
    end
  end
end
```

Array 
```rb
arr_of_stirng = ["foo", "bar"]
arr_of_string_2 = %w(foo bar) # shortcut to write array without \"
```

### Hack

```sh
# make compile faster for jruby
JRUBY_OPTS=--dev rspec

# alias for bundle exec
alias be="bundle exec "
```
