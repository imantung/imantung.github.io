---
layout: gist
title: PHP
category: Programmings
---

# PHP

refGeneral:
- [PHP The Right Way](https://phptherightway.com/)
- [You don't have permission to access on this server](https://stackoverflow.com/questions/10873295/error-message-forbidden-you-dont-have-permission-to-access-on-this-server)
- [cleanup unused code in a large php project](https://stackoverflow.com/questions/16936833/cleanup-unused-code-in-a-large-php-project)


PHP Session: 
- [length of php session](https://stackoverflow.com/questions/12240922/what-is-the-length-of-a-php-session-id-string)
- [how php session-id generated](https: //stackoverflow.com/questions/18937651/php-session-ids-how-are-they-generated)

Framework:
- [Laravel Zero](https://github.com/laravel-zero/laravel-zero): php for console framework


### Run apache server in mac

Apache default from Mac
```bash
sudo apachectl start
sudo apachectl stop

sudo apachectl configtest # check httpd.conf

cd /Library/WebServer/Documents # root folder
```

PHP settings in `httpd.conf`
```
LoadModule php7_module libexec/apache2/libphp7.so
#LoadModule php5_module /usr/local/php5/libphp5.so
...
<FilesMatch .php$>
    SetHandler application/x-httpd-php
</FilesMatch>
...
<IfModule dir_module>
    DirectoryIndex index.php index.html
</IfModule>
```

Default log location: `/var/log/apache2`

Disabled Default apache in mac:
```bash
sudo launchctl unload -w /System/Library/LaunchDaemons/org.apache.httpd.plist
```

### Composer

```bash
brew install composer
```


## PHP5 no macOS Mojave

[OSX Binary package download source](https://php-osx.liip.ch/)

[based on this](https://github.com/Homebrew/homebrew-core/issues/32497)

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