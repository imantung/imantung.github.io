---
layout: tech_gist
title: SemVer
category: Programming & Coding
---
# SemVer

[Specification](https://semver.org/)

SemVer is a 3-component system in the format of `x.y.z` where:
- `x` stands for a major version (likely to break the existing API)
- `y` stands for a minor version (new features in a backward-compatible)
- `z` stands for a patch (fixing bugs)

Notes: 
- It Starts at `0.1.0`
- Before `1.0.0` is Only the Development Phase
- Pre-releases can be defined by appending a hyphen and an identifier to a version
  -  `1.0.0-alpha.1` is pre-release for `1.0.0`
