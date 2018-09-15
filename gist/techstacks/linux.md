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

Install java (Ubuntu)
```sh
sudo add-apt-repository -y ppa:webupd8team/java
sudo apt-get update
echo debconf shared/accepted-oracle-license-v1-1 select true | sudo debconf-set-selections
echo debconf shared/accepted-oracle-license-v1-1 seen true | sudo debconf-set-selections
sudo aptitude -y install oracle-java8-installer
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
