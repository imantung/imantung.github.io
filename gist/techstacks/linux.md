---
layout: gist
title: Linux
---


(Filesystem Hierarchy Standard)[http://refspecs.linuxfoundation.org/FHS_2.3/fhs-2.3.html]


Install java (Ubuntu)
```sh
sudo add-apt-repository -y ppa:webupd8team/java
sudo apt-get update
echo debconf shared/accepted-oracle-license-v1-1 select true | sudo debconf-set-selections
echo debconf shared/accepted-oracle-license-v1-1 seen true | sudo debconf-set-selections
sudo aptitude -y install oracle-java8-installer
```
