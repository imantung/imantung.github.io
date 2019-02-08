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
```sh
ps ax | grep [NAME] | grep -v grep | awk '{print $1}' 
```

Check IPs connecting to a machine
```sh
sudo netstat -ant | sed '1d' | awk '{print $5}' | cut -f1 -d':' | sort | uniq
```

Network Time Protocol (NTP) is a protocol used to synchronize computer system clock automatically over a networks.
```sh
sudo apt-get remove ntp ntpdate
sudo apt-get install ntp ntpdate
```

### Environment Variable

Overview:
- Each process has its own separate set of environment variables
- It inherits a duplicate environment of its parent process, except for explicit changes made by the parent when it creates the child
- All environment variables must live together in a single environment block, which itself has a limit of `32767` characters. But that count is the sum over all environment variable names and values
- The value is truncated at `2047` characters

Directory-based/local environment tool:
- [autoenv](https://github.com/kennethreitz/autoenv) (deprecated?)
- [direnv](https://direnv.net/)

Direnv:
```sh
brew install direnv

echo 'eval "$(direnv hook zsh)"' >> ~/.zshrc
source ~/.zshrc

direnv allow
```

### Multiline

Append multiple-line to a file
```sh
# possibility 1:
echo "line 1" >> greetings.txt
echo "line 2" >> greetings.txt

# possibility 2:
echo "line 1
line 2" >> greetings.txt

# possibility 3:
cat <<EOT >> greetings.txt
line 1
line 2
EOT
```

### Bash Script

Bash = Bourne again shell

A script may specify `#!/bin/bash` on the first line, meaning that the script should always be run with bash
```sh
#!/bin/bash
```

Function
```sh
#!/bin/bash

some_function(){
  echo "meh"
}

echo $(some_function)
```

Variable
```sh
MY_VAR=123
echo $MY_VAR
```

Command Arguments
```sh
#!/bin/bash

echo $1 # first argument
echo $2 # second argument
echo $@ # rest arguments
```

if-else
```sh
#!/bin/bash

if [ "$1" = "cool" ]; then
    echo "Cool Beans"
elif [ "$1" = "neat"]; then
    echo "Neato cool"
else
    echo "Not Cool Beans"
fi
```


Test = `[`
```sh
if [ "$foo" = "bar" ] ; then echo "test" fi

# Equivalent with
if test "$foo" = "bar" ; then echo "test" fi
```

Check if variable unset
```sh
if [ -z ${var+x} ];
then echo "var is unset";
else echo "var is set to '$var'"; fi
```

### NOHUP

"No Hang Up"

Example:
```sh
nohup ./myprogram > myprogram.log 2>&1 &
```
- `nohup` --> no hang up  
- `2>&1`--> stderr also goes to the stdout  
- `&` --> run on background  

### Logs

[Logrotate](https://serversforhackers.com/c/managing-logs-with-logrotate)

[Remove journal log and abrt log](https://unix.stackexchange.com/questions/130786/can-i-remove-files-in-var-log-journal-and-var-cache-abrt-di-usr)


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
