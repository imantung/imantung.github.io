---
layout: tech_gist
title: Write Documentation
category: Testing & Agile methodology
---

# Write Documentation

Ref:
- [Django Doc Writing Principles](https://jacobian.org/writing/great-documentation/)
- [Pattern Forms](https://www.martinfowler.com/articles/writingPatterns.html)
- [RFC2119](https://tools.ietf.org/html/rfc2119): description use of MUST, MUST NOT, SHOULD, MAY, etc in internet documentation
- [Readme Driven Development](http://tom.preston-werner.com/2010/08/23/readme-driven-development.html)
- [Code of conduct by 18F](https://github.com/18F/code-of-conduct)
- [Documenting API](https://idratherbewriting.com/learnapidoc/)
- [Golumn - Git-based Wiki](https://github.com/gollum/gollum)
- <https://blog.stephsmith.io/learning-to-write-with-confidence/>
- <https://nordicapis.com/5-examples-of-excellent-api-documentation/>


### README

- [Curated list of Awesome README](https://github.com/matiassingers/awesome-readme)
- [Readme Template by PurpleBooth](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
- [Beginner guide to writing a kickass readme](https://medium.com/@meakaakka/a-beginners-guide-to-writing-a-kickass-readme-7ac01da88ab3)


## System Notation/Model

- [System-View-Model](https://en.wikipedia.org/wiki/View_model): View is a representation of a whole system from the perspective of a related set of concerns
- [Entity–attribute–value model (EAV)](https://en.wikipedia.org/wiki/Entity%E2%80%93attribute%E2%80%93value_model)

4+1 Architectural View
- `Logical view`: is concerned with the functionality that the system provides to end-users.
- `Development view`: illustrates a system from a programmers perspective and is concerned with software management.
- `Process view`: deals with the dynamic aspect of the system, explains the system processes and how they communicate, and focuses on the runtime behavior of the system.
- `Physical view`: depicts the system from a system engineer's point of view. It is concerned with the topology of software components on the physical layer, as well as communication between these components.
- Use cases or scenarios are utilized to illustrate the architecture

c4 model
- `Context` (level 1): they show the system in scope and its relationship with users and other systems
- `Container` (level 2): they decompose a system into interrelated containers.  A container represents an application or a data store
- `Component` (level 3): they decompose containers into interrelated components, and relate the components to other containers or other systems
- `Code` (level 4): they provide additional details about the design of the architectural elements that can be mapped to code

