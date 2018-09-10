---
layout: gist
title: Git
---

remote: remote location of repository
origin: default name of the repository
master: main branch of repository

project setup
```sh
git init
git add README.md
git commit -m "first commit"
git remote add origin [git_url]
git push -u origin master
```

Remote 
```sh
git remote -v
git remote set-url origin [git_url]
```

Get latest commit ID
```sh
git log --format=%h -1
```

Find who modified this line ([git blame](https://git-scm.com/docs/git-blame))
```sh
# blame at line 40 of file foo
git blame -L 40,+1 foo

# blame at line 40 - 60 of file foo
git blame -L 40,+21 foo
git blame -L 40,60 foo
```

Tagging:
```sh
# Annotated Tags
git tag -a v2.1.0 -m "xyz feature is released in this tag."

# Lightweight Tags
git tag v2.1.0

# Push tags
git push origin --tags

# Delete the tag from the remote repository
git push --delete origin TAGNAME

# Delete the tag locally
git tag -d TAGNAME

# Delete all local tags and get the list of remote tags
git tag -l | xargs git tag -d
git fetch

# Remove all remote tags
git tag -l | xargs -n 1 git push --delete origin

# Clean up local tags
git tag -l | xargs git tag -d
```



### Config

convert `git:` to `http:` from cli
```sh
git config --global url.https://github.com/.insteadOf git://github.com/
```

convert `https:` to `git:` from config file
```
[url "git@source.golabs.io:"]
  insteadOf = https://source.golabs.io/
```
