---
layout: gist
title: Java
---

### Installation 

```sh
cd ~/Downloads
curl -v -j -k -L -H "Cookie: oraclelicense=accept-securebackup-cookie" http://download.oracle.com/otn-pub/java/jdk/8u112-b15/jre-8u112-macosx-x64.dmg > jre-8u112-macosx-x64.dmg
hdiutil attach jre-8u112-macosx-x64.dmg
sudo installer -pkg /Volumes/Java\ 8\ Update\ 112/Java\ 8\ Update\ 112.app/Contents/Resources/JavaAppletPlugin.pkg -target /
diskutil umount /Volumes/Java\ 8\ Update\ 112 
rm jre-8u112-macosx-x64.dmg
```
