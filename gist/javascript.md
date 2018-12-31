---
layout: gist
title: Javascript
---


```js
Object.keys(list)
Object.values(list)

// if values() not working
Object.keys(obj).map(e => obj[e])
```

SetInterval with condition
```js
var timesRun = 0;
var interval = setInterval(function(){
    timesRun += 1;
    if(timesRun === 60){
        clearInterval(interval);
    }
    //do whatever here..
}, 2000); 
```

### JQuery

Document ready
```js
$( document ).ready(function() {
  alert("ready")
});
```

## NodeJS

Package manager: 
- [npm](https://www.npmjs.com/) --> default
- [yarn](https://yarnpkg.com/en/)

Manage node version using [n](https://github.com/tj/n)
```sh
npm install -g n # setup

n 0.10.33  # install/use v0.10.33
n latest # install/use the latest version
n stable # install/use the latest stable version
``` 


Downgrade the npm (make sure your node is compatable with npm)
```sh
npm install -g npm@3.10.10
```

Another alternative is using [NVM](https://github.com/creationix/nvm) --> never tried

[setting up a minimal node with webpack and babel](https://dev.to/aurelkurtula/setting-up-a-minimal-node-environment-with-webpack-and-babel--1j04)
