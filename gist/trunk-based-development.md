---
layout: gist
title: Trunk Based Development
---

[trunkbaseddevelopment.com](https://trunkbaseddevelopment.com/)

[Paul Hammant - Branch by Abstraction](https://paulhammant.com/blog/branch_by_abstraction.html)

[Gordon Oheim - Trunk Based Development](https://www.slideshare.net/go_oh/trunk-based-development-36406599)


[Trunk Based Development vs Git Flow](https://trunkbaseddevelopment.com/)

### Branch by Abstraction
- modularity through design not through git/VCS
- add an abstraction over any code you are going to change in a features
- new feature are added through Adapter and Interfaces
- production code keeps old implementation while feature is incomplete
- development code uses the new implementations
- when the feature is ready, the new implementation are rollout

### Feature Toggle

- feature are hidden until ready
- hide features at the entry points
- make it easy to configure

[Implementing Feature Toggle](https://martinfowler.com/articles/feature-toggles.html#ImplementationTechniques)

[featureflags.io](https://featureflags.io/)

### Database Changes

- must be backward compatible
- be wise on migration script so it's easy to rollback

### Good

- lean
- can release any time
- no merge pain

### Bad

- branch no longer document features
- need feature toggle
- need to take care db changes
- need good abstraction

### Do
- Everyone commits to master at least once per day
- remote branches are only made for releases
- developer may use local branches
- hotfixes are also committed to master
- hotfixes are cherry picked into supported releases
- only Release Manager may branch release branch

### Don't

[You're doing it wrong](https://trunkbaseddevelopment.com/youre-doing-it-wrong/)
