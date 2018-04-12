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
rbenv global 2.4.3
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

### Hack

```sh
# make compile faster for jruby
JRUBY_OPTS=--dev rspec

# alias for bundle exec
alias be="bundle exec "
```

### Parse RSS 

```rb
require 'rubygems'
require 'rss'
require 'open-uri'

@rss = RSS::Parser.parse('https://medium.com/feed/gojekengineering')
```


### Snipet

Change key name
```rb
hash[:new_key] = hash.delete :old_key
```
