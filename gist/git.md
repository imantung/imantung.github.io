---
layout: gist
title: Git
---

# Git

Reference:
- [Start using git in command line](https://docs.gitlab.com/ee/gitlab-basics/start-using-git.html)
- [How to not be afraid of git anymore](https://medium.freecodecamp.org/how-not-to-be-afraid-of-git-anymore-fe1da7415286)
- [Git standards](https://gist.github.com/carlmjohnson/9c3a4507b432c5a03acd1e8830a02a50)
- [gitattributes file](https://medium.com/@pablorsk/be-a-git-ninja-the-gitattributes-file-e58c07c9e915)
- [Working multiple repo in one repo](https://medium.com/@patrickleet/mono-repo-or-multi-repo-why-choose-one-when-you-can-have-both-e9c77bd0c668)
- [Continous Integration with mono repo](https://hackernoon.com/continuous-integration-in-projects-using-monorepo-9b828d7a8dfa)
- <https://github.com/korfuri/awesome-monorepo>
- <https://www.atlassian.com/git/tutorials/big-repositories>

Terms:
- `remote`: remote location of repository
- `origin`: default name of the repository
- `master`: main branch of repository

Project setup
```bash
git init
git add README.md
git commit -m "first commit"
git remote add origin [git_url]
git push -u origin master
```

change url
```bash
git remote -v
git remote set-url origin [git_url]
```

Get latest commit ID
```bash
git log --format=%h -1
```

Find who modified this line ([git blame](https://git-scm.com/docs/git-blame))
```bash
# blame at line 40 of file foo
git blame -L 40,+1 foo

# blame at line 40 - 60 of file foo
git blame -L 40,+21 foo
git blame -L 40,60 foo
```

Tagging:
```bash
git tag -a v2.1.0 -m "xyz feature is released in this tag." # Annotated Tags
git tag v2.1.0 # Lightweight Tags

git push origin --tags # Push tags

git push --delete origin TAGNAME # Delete the tag from the remote repository
git tag -d TAGNAME # Delete the tag locally

# Delete all local tags and get the list of remote tags
git tag -l | xargs git tag -d
git fetch

# Remove all remote tags
git tag -l | xargs -n 1 git push --delete origin

# Clean up local tags
git tag -l | xargs git tag -d
```

(Clone a specific git branch)[https://stackoverflow.com/questions/1911109/how-to-clone-a-specific-git-branch/4568323#4568323]
```bash
git clone -b <branch> <remote_repo>
git clone -b my-branch git@github.com:user/myproject.git 

# to prevent fetching of all branches at Git 1.7.10
git clone -b opencv-2.4 --single-branch https://github.com/Itseez/opencv.git
```

Move repo1 to repo2 and keep the history
```bash
cd repo2
git checkout master
git remote add r1remote **url-of-repo1**
git fetch r1remote
git merge r1remote/master --allow-unrelated-histories
git remote rm r1remote
```

### Config

InsteadOf
```bash
# convert git: to http:
git config --global url.https://github.com/.insteadOf git://github.com/

# convert http: to git:
git config --global url.git@source.golabs.io.insteadOf https://source.golabs.io
```

InsteadOf in configu
```
[url "git@source.golabs.io:"]
  insteadOf = https://source.golabs.io/
```


### Fork repository

```bash
# Configuring a remote for a fork
git remote add upstream https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git

# View remote
git remote -v

# sync
git fetch upstream
git merge upstream/master
```


### Source Tree

Install source tree command line (if failed installed from the ui)
```bash
alias stree='/Applications/SourceTree.app/Contents/Resources/stree'
```

Enable force push
- Version 2.7.6: setting > advance


## Good Git Commit

Good Git Commit
- Not too much (step by step as the thinking process)
- Not too short (focus on important change)
- Tell what the changes and why
- Compile or test success
- Don’t forget to put required file e.g. migration file
- Contain unit test 
- No dead/commented code
- Include pairing partner (using “Coauthored By”)

Bad examples of a commit message: 
- “Fix bug” (which bug?)
- “Modify some_file.go” (What changes? Why?)
- “Fix typo” (Too small) 