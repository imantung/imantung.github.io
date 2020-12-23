---
layout: gist
title: Linux
---

# Linux


Some reading:
- [Filesystem Hierarchy Standard](http://refspecs.linuxfoundation.org/FHS_2.3/fhs-2.3.html)
- [Unix VS Linux](https://www.guru99.com/difference-unix-vs-linux.html)


`/dev/null` = null device =  device file that discards all data written to it but reports that the write operation succeeded

Run multiple command:
- `A ; B`  – Run A and then B, regardless of the success or failure of A
- `A && B`  – Run B only if A succeeded
- `A || B`  – Run B only if A failed

Get PID
```bash
ps ax | grep [NAME] | grep -v grep | awk '{print $1}'
```

Check IPs connecting to a machine
```bash
sudo netstat -ant | sed '1d' | awk '{print $5}' | cut -f1 -d':' | sort | uniq
```

Network Time Protocol (NTP) is a protocol used to synchronize computer system clock automatically over a networks.
```bash
sudo apt-get remove ntp ntpdate
sudo apt-get install ntp ntpdate
```


### ULimit

[doc](https://ss64.com/bash/ulimit.html)

```bash
ulimit -n # current
ulimit -u unlimited # set to unlimited
ulimit -a # show all
```
