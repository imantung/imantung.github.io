---
layout: gist
title: Contribution Guide
category: programming
---

# Contribution Guide

Anything about contributing in single source code

## CONTRIBUTION.md Files

Template:
- <https://gist.github.com/briandk/3d2e8b3ec8daf5a27a62>

## Code Review

Ref: 
- [(Google Enginnering Practices)How to do a code review](https://google.github.io/eng-practices/review/reviewer/)


Abbreviation:
- `LGTM`: Look Good To Me (approve the request)
- `PTAL`: Please Take A Look (request for review)
- `CL`: Change List


## Database

Ref: 
- [SQL Style Guide](https://www.sqlstyle.guide/)

## TODO Comment Tag

Reference
- [PEP 350 - Codetags](https://legacy.python.org/dev/peps/pep-0350/)
- [what is the meaning of xxx in code comment](https://stackoverflow.com/questions/1452934/what-is-the-meaning-of-xxx-in-code-comments)
- [Using TODO Comment](https://medium.com/imdoneio/5-ways-using-todo-comments-will-make-you-a-better-programmer-240abd00d9e4)

Comment Code Tags:
- `NOTE:`    Description of how the code works 
- `HACK:FIXME:`/`HACK`: Not very well written or malformed code to circumvent a problem/bug. 
- `XXX`/`NOTE:XXX:`: Warning about possible pitfalls.
- `FIXME`: This works, sort of, but it could be done better. (usually code written in a hurry that needs rewriting).
- `BUG`: There is problem here
- `TODO`: No problem, but addtional code needs to be written, usually when you are skipping something.
- `DOING`: Code is not completed yet

## Trunk Based Development

Ref:
- [trunkbaseddevelopment.com](https://trunkbaseddevelopment.com/)
- [Paul Hammant - Branch by Abstraction](https://paulhammant.com/blog/branch_by_abstraction.html)
- [Gordon Oheim - Trunk Based Development](https://www.slideshare.net/go_oh/trunk-based-development-36406599)
- [Trunk Based Development vs Git Flow](https://trunkbaseddevelopment.com/)

Branch by Abstraction:
- modularity through design not through git/VCS
- add an abstraction over any code you are going to change in a features
- new feature are added through Adapter and Interfaces
- production code keeps old implementation while feature is incomplete
- development code uses the new implementations
- when the feature is ready, the new implementation are rollout

Implementing feature toggle:
- feature are hidden until ready
- hide features at the entry points
- make it easy to configure


On database changes:
- must be backward compatible
- be wise on migration script so it's easy to rollback

Good:
- lean
- can release any time
- no merge pain

Bad:
- branch no longer document features
- need feature toggle
- need to take care db changes
- need good abstraction

Do:
- Everyone commits to master at least once per day
- remote branches are only made for releases
- developer may use local branches
- hotfixes are also committed to master
- hotfixes are cherry picked into supported releases
- only Release Manager may branch release branch

Don't: [You're doing it wrong](https://trunkbaseddevelopment.com/youre-doing-it-wrong/)