---
layout: gist
title: Bash
category: Programmings
---

# Bash

Bash = Bourne again shell

Read:
- [difference between sh and bash](https://stackoverflow.com/questions/5725296/difference-between-sh-and-bash)
- [string operator](https://www.linuxjournal.com/article/8919)
- <https://github.com/vishnubob/wait-for-it>
- <https://vaneyckt.io/posts/safer_bash_scripts_with_set_euxo_pipefail/>

A script may specify `#!/bin/bash` on the first line, meaning that the script should always be run with bash
```bash
#!/bin/bash
```

Function
```bash
#!/bin/bash

some_function(){
  echo "meh"
}

echo $(some_function)
```

Variable
```bash
MY_VAR=123
echo $MY_VAR
```

Command Arguments
```bash
#!/bin/bash

echo $1 # first argument
echo $2 # second argument
echo $@ # rest arguments
```

if-else
```bash
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
```bash
if [ "$foo" = "bar" ] ; then echo "test" fi

# Equivalent with
if test "$foo" = "bar" ; then echo "test" fi
```

Check if variable unset
```bash
if [ -z ${var+x} ];
then echo "var is unset";
else echo "var is set to '$var'"; fi
```

Iterate over files in a directory
```bash
#!/bin/bash
for filename in /Data/*.txt; do
    for ((i=0; i<=3; i++)); do
        ./MyProgram.exe "$filename" "Logs/$(basename "$filename" .txt)_Log$i.txt"
    done
done
```

Split string and get last element
```bash
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

### Operator

<https://unix.stackexchange.com/questions/159513/what-are-the-shells-control-and-redirection-operators>


### Multiline

Append multiple-line to a file
```bash
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
