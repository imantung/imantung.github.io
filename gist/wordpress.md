---
layout: gist
title: Wordpress
---

# Wordpress


[Famous 5-Minute Installation](https://codex.wordpress.org/Installing_WordPress#Famous_5-Minute_Installation)


### Wordpress CLI

[wp-cli](https://wp-cli.org/)

[Installing](https://make.wordpress.org/cli/handbook/installing/)


```bash
# setup
curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
php wp-cli.phar --info
chmod +x wp-cli.phar
sudo mv wp-cli.phar /usr/local/bin/wp

# update
wp cli update
```
