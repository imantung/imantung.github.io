---
layout: gist
title: Linux (Environment Variable)
category: Infra/Clouds
---

# Environment Variable

Overview:
- Each process has its own separate set of environment variables
- It inherits a duplicate environment of its parent process, except for explicit changes made by the parent when it creates the child
- All environment variables must live together in a single environment block, which itself has a limit of `32767` characters. But that count is the sum over all environment variable names and values
- The value is truncated at `2047` characters

Directory-based/local environment tool:
- [autoenv](https://github.com/kennethreitz/autoenv) (deprecated?)
- [direnv](https://direnv.net/)

Direnv:
```bash
brew install direnv

echo 'eval "$(direnv hook zsh)"' >> ~/.zshrc
source ~/.zshrc

direnv allow
```