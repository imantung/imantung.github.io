---
layout: gist
title: Mac
---

[Homebrew - The missing package manager for mac os](https://brew.sh/)
```sh
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

[oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh)
```sh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

Change zsh themes at `~/.zhsrc`
```
ZSH_THEME="af-magic"
```

[iTerm2](https://www.iterm2.com/)

Show available update
```sh
softwareupdate -install -a
```

### apache

```sh
sudo apachectl start
sudo apachectl stop

cd /Library/WebServer/Documents # root folder
```


### High Sierra

brew problem
```
sudo chown -R $(whoami) $(brew --prefix)/*
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
