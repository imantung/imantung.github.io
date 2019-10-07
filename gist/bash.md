---
layout: gist
title: Bash Script
---

Bash = Bourne again shell

Read:
- [difference between sh and bash](https://stackoverflow.com/questions/5725296/difference-between-sh-and-bash)
- [string operator](https://www.linuxjournal.com/article/8919)
- <https://github.com/vishnubob/wait-for-it>

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

Iterate over files in a directory
```sh
#!/bin/bash
for filename in /Data/*.txt; do
    for ((i=0; i<=3; i++)); do
        ./MyProgram.exe "$filename" "Logs/$(basename "$filename" .txt)_Log$i.txt"
    done
done
```

Split string and get last element
```sh
$ foo=1:2:3:4:5
$ echo ${foo##*:}
5
```

This trims everything from the front until a ':', greedily.
```
${foo  <-- from variable foo
  ##   <-- greedy front trim
  *    <-- matches anything
  :    <-- until the last ':'
}
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
