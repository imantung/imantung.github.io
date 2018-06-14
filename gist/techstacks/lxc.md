---
layout: gist
title: LXC
---

```sh
sudo apt-get install lxd lxd-client 
sudo lxd init
lxc launch ubuntu:16.04 app01
lxc list
lxc start app01
lxc stop app01
lxc restart app01
lxc pause app01
lxc exec app01 bash
```
