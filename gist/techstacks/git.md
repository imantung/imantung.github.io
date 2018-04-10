---
layout: gist
title: Git
---

### Tags

Git uses two main types of tags: lightweight and annotated.

Annotated Tags:
```
git tag -a v2.1.0 -m "xyz feature is released in this tag."
```

Lightweight Tags
```
git tag v2.1.0
```

Push Tags
```
git push origin --tags
```

Delete the tag from the remote repository:
```
git push --delete origin TAGNAME
```

Delete the tag locally:
```
git tag -d TAGNAME
```

Delete all local tags and get the list of remote tags:
```
git tag -l | xargs git tag -d
git fetch
```

Remove all remote tags
```
git tag -l | xargs -n 1 git push --delete origin
```

Clean up local tags
```
git tag -l | xargs git tag -d
```
