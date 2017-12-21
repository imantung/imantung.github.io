---
layout: post
title: "$JAVA_HOME without JDK"
date: 2017-09-14 06:49:48 +0700
tags: ["java", "mac"]
---

I try run some jar file on my user laptop and found that terminal java version is different with mac OS version. Downloading [JRE](http://www.oracle.com/technetwork/java/javase/downloads/index.html) is not helping because it's not set environment variable `$JAVA_HOME`

This instruction may help to set `$JAVA_HOME` without downloading [JDK](https://en.wikipedia.org/wiki/Java_Development_Kit).

1. Go to `System Preference > Java`
2. Check or update your java version on `Update` tab
3. On `Java` tab, click button `View` to see java installation location. 

    ![java update location]({{ site.url }}/assets/java_update_location.jpg)
4. Copy the `path` and remove `bin/java`
```bash
/Library/Internet Plug-Ins/JavaAppletPlugin.plugin/Contents/Home
```
5. Setup environment variable on your mac
```bash
$ echo "export JAVA_HOME=/Library/Internet Plug-Ins/JavaAppletPlugin.plugin/Contents/Home" >> ~/.bash_profile
$ source .bash_profile
```
6. Check your java version
```bash
$ java -version
```
