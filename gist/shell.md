---
layout: gist
title: Shell
---

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
