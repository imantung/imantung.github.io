---
layout: gist
title: Shell
---

A script may specify `#!/bin/bash` on the first line, meaning that the script should always be run with bash
```sh
#!/bin/bash
```

Bash = Bourne again shell 


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
