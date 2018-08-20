---
layout: gist
title: NodeJS
---

## Package Manager

Options: 
- [npm](https://www.npmjs.com/) --> default
- [yarn](https://yarnpkg.com/en/)


## Version Manager

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
