---
layout: gist
title: PHP
---

(You don't have permission to access on this server)[https://stackoverflow.com/questions/10873295/error-message-forbidden-you-dont-have-permission-to-access-on-this-server]


### Composer

```bash
brew install composer
```


## PHP5 no macOS Mojave

(OSX Binary package download source)[https://php-osx.liip.ch/]

(based on this)[https://github.com/Homebrew/homebrew-core/issues/32497]

```bash
curl -s https://php-osx.liip.ch/install.sh | bash -s force 5.6
export PATH=/usr/local/php5/bin:$PATH
```

### Redis Session Handler

[phpredis](https://github.com/phpredis/phpredis)

Install redis extension
```bash
pecl install redis
```

Change `php.ini`
```
session.save_handler = redis
session.save_path = "tcp://host1:6379?weight=1, tcp://host2:6379?weight=2&timeout=2.5, tcp://host3:6379?weight=2&read_timeout=2.5"

```