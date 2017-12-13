---
layout: post
title: "Update JAVA on Mac Terminal"
date: 2017-09-14 06:49:48 +0700
tags: ["java", "mac"]
---

I run some jar file on my user laptop and found that her java is not up2date on terminal. So I download latest update via mac system preference but the terminal version didn't change. Downloading JRE from oracle also same effect. Why `$JAVA_HOME` is not automatically set? I guess we need download JDK instead of JRE. 

Alternatively we can setup `$JAVA_HOME` manually with this instructions.

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
