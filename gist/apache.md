---
layout: gist
title: Apache
---

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