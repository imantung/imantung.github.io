---
layout: gist
title: NodeJS
category: stacks
---

# NodeJS

Package manager: 
- [npm](https://www.npmjs.com/) --> default
- [yarn](https://yarnpkg.com/en/)

Manage node version using [n](https://github.com/tj/n)
```bash
npm install -g n # setup

n 0.10.33  # install/use v0.10.33
n latest # install/use the latest version
n stable # install/use the latest stable version
``` 


Downgrade the npm (make sure your node is compatable with npm)
```bash
npm install -g npm@3.10.10
```

Update the npm
```bash
npm install npm@latest -g
```

Another alternative is using [NVM](https://github.com/creationix/nvm) --> never tried

[setting up a minimal node with webpack and babel](https://dev.to/aurelkurtula/setting-up-a-minimal-node-environment-with-webpack-and-babel--1j04)

<https://github.com/facebook/create-react-app>

### Where does npm install package?

og: <https://stackoverflow.com/questions/5926672/where-does-npm-install-packages/5926706#5926706>
```bash
npm list -g # global library
npm list # local library

npm root -g
npm rooot

# global library possiblity
cd /usr/local/lib/node
cd /usr/local/lib/node_modules
cd $NODE_PATH
cd %USERPROFILE%\AppData\npm\node_modules # windows XP
cd %USERPROFILE%\AppData\Roaming\npm\node_modules # windows 7/8/10


# local library
cd node_modules
```

[Production Process Manager](https://pm2.keymetrics.io/)

### Error: Maximum call stack size exceeded

Try one of below: 
1. Remove `package-lock.json`
2. Clear cache `npm cache clean --force`
3. NPM Rebuild `npm rebuild`


## Code snippet

[Read file line by line](https://stackoverflow.com/questions/6156501/read-a-file-one-line-at-a-time-in-node-js)
```js
var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('file.in')
});

lineReader.on('line', function (line) {
  console.log('Line from file:', line);
});
```