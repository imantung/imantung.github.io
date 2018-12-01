---
layout: gist
title: Linux
---


[Filesystem Hierarchy Standard](http://refspecs.linuxfoundation.org/FHS_2.3/fhs-2.3.html)

`/dev/null` = null device =  device file that discards all data written to it but reports that the write operation succeeded

Run on background:
```sh
nohup ./myprogram > myprogram.log 2>&1 &
```
`nohup` --> no hang up  
`2>&1`--> stderr also goes to the stdout  
`&` --> run on background  
  

Get PID
```sh
ps ax | grep [NAME] | grep -v grep | awk '{print $1}'
```

Write file 
```sh
#!/bin/sh
FILE="/path/to/file"

/bin/cat <<EOM >$FILE
text1
text2
text3
text4
EOM
```

Note on environment variable:
- Each process has its own separate set of environment variables
- It inherits a duplicate environment of its parent process, except for explicit changes made by the parent when it creates the child
- All environment variables must live together in a single environment block, which itself has a limit of `32767` characters. But that count is the sum over all environment variable names and values
- The value is truncated at `2047` characters 

Check IPs connecting to a machine
```sh
sudo netstat -ant | sed '1d' | awk '{print $5}' | cut -f1 -d':' | sort | uniq
```

Network Time Protocol (NTP) is a protocol used to synchronize computer system clock automatically over a networks.
```sh
sudo apt-get remove ntp ntpdate
sudo apt-get install ntp ntpdate
```

### Screen

```sh
screen -R [name]
screen -ls 
screen -x [name]

```

`ctrl + a + d` to exit
`ctrl + a + k` to kill


### Curl

```sh
curl [host]

# send HEAD request
curl -I [host]

# verbose 
curl -v [host]
```

### ULimit

[doc](https://ss64.com/bash/ulimit.html)

```sh
ulimit -n # current
ulimit -u unlimited # set to unlimited
ulimit -a # show all
```
