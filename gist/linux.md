---
layout: gist
title: Linux
---


[Filesystem Hierarchy Standard](http://refspecs.linuxfoundation.org/FHS_2.3/fhs-2.3.html)

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

### Compress
```bash
tar -czvf name-of-archive.tar.gz /path/to/directory-or-file

# multiple file/directory
tar -czvf archive.tar.gz /home/ubuntu/Downloads /usr/local/stuff /home/ubuntu/Documents/notes.txt

# exclude file
tar -czvf archive.tar.gz /home/ubuntu --exclude=/home/ubuntu/Downloads --exclude=/home/ubuntu/.cache
tar -czvf archive.tar.gz /home/ubuntu --exclude=*.mp4

# using bzip2
tar -cjvf archive.tar.bz2 stuff

#extract
tar -xzvf archive.tar.gz
tar -xzvf archive.tar.gz -C /tmp

```
- -c: Create an archive.
- -z: Compress the archive with gzip.
- -v: Display progress in the terminal while creating the archive, also known as “verbose” mode. The v is always optional in these commands, but it’s helpful.
- -f: Allows you to specify the filename of the archive.

### NOHUP

"No Hang Up"

Example:
```bash
nohup ./myprogram > myprogram.out 2>&1 &
```
- `nohup` --> no hang up  
- `2>&1`--> stderr also goes to the stdout  
- `&` --> run on background  


### Screen

```sh
screen -R [name]
screen -ls
screen -x [name]
```

- `ctrl + a + d` to exit
- `ctrl + a + k` to kill

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
