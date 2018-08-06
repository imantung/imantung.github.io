---
layout: gist
title: Design Principle
---

`KISS` = Keep it simple stupid

---

`DRY` = Don't Repeat Yourself

---

`Convention over Configuration`

---

`Fat models, skinny controllers`

---

`Tell, Don't Ask`

---

`Idempotency`

---

`SOLID Principle`
1. Single Responsibility Principle
  - A class should have only a single responsibility 
2. Open/closed Principle
  - Software entities … should be open for extension, but closed for modification.
3. Liskov Substitution Principle
  - objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program.
4. Interface Segregation Principle
  - Many client-specific interfaces are better than one general-purpose interface.
  - No client should be forced to depend on methods it does not use
5. Dependency Inversion Principle
  - One should depend upon abstractions, [not] concretions.

---

`Separation of Concern`
+ Object Oriented Programming
  - separate concern into objects
+ Model View Controller
  - separate concern into model, view, controller
+ Subject Oriented Programming
  - separate concerns to be addressed as separate software constructs, each on an equal footing with the others
  - advocates the organization of the classes that describe objects into “subjects”, which may be composed to form larger subjects
+ Aspected Oriented Programmin / [cross-cutting concern](https://en.wikipedia.org/wiki/Cross-cutting_concern)

---  

`Law of Demeter`
- Each unit should have only limited knowledge about other units: only units "closely" related to the current unit.
- Each unit should only talk to its friends; don't talk to strangers.
- Only talk to your immediate friends.

---

`Common Closure Principle`
- Classes within a released component should share common closure. 
- That is, if one needs to be changed, they all are likely to need to be changed. 
- What affects one, affects all. 
