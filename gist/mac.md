---
layout: gist
title: Mac
---

# Mac

[iTerm2](https://www.iterm2.com/)

Show available update:
```bash
softwareupdate -install -a
```

### Homebrew

[Homebrew](https://brew.sh/): The missing package manager for mac os
```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Tap to deprecated formula
```bash
brew tap exolnet/homebrew-deprecated
```

Cheatsheet
```bash
brew update # Fetch latest version of homebrew and formula
brew outdated # Show formulae with an updated version available

brew upgrade # Upgrade all outdated and unpinned brews
brew upgrade <formula> # Upgrade only the specified brew

brew pin <formula> # Prevent the specified formulae from being upgraded
brew unpin <formula> # Allow the specified formulae to be upgraded.


brew tap # List all the current tapped repositories (taps)
brew tap <user/repo> # Tap a formula repository from Github using https for tap https://github.com/user/homebrew-repo
brew tap <user/repo> <URL> # Tap a formula repository from the specified URL
brew untap <user/repo> # Remove the given tap from the repository


brew tap homebrew/cask # Tap the Cask repository from Github.
brew cask list # List all the installed casks .
brew cask install <cask> # Install the given cask.
brew cask reinstall <cask> # Reinstalls the given Cask
brew cask uninstall <cask> # Uninstall the given cask.


brew list # List all the installed formulae.
brew search # Display all locally available formulae for brewing.
brew search <text> # Perform a substring search of formulae names for brewing.
brew info <formula> # Display information about the formula.
brew install <formula> # Install the formula.
brew uninstall <formula> # Uninstall the formula.


brew cleanup # Remove older versions of installed formulae.
brew cleanup <formula> # Remove older versions of specified formula.
brew cleanup -n # Display all formula that will be removed (dry run)
```

### Zsh

[oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh)
```sh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

Change zsh themes at `~/.zhsrc`
```
ZSH_THEME="af-magic"
```

### High Sierra

brew problem
```
sudo chown -R $(whoami) $(brew --prefix)/*
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
