---
layout: gist
title: Design Principle
---

# Design Principle

## Common

- `KISS` = Keep it simple stupid
- `DRY` = Don't Repeat Yourself

## SOLID 
1. `Single Responsibility Principle`: 
   - A class should have only a single responsibility
2. `Open/closed Principle`
   - Software entities … should be open for extension, but closed for modification.
3. `Liskov Substitution Principle`: objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program.
4. `Interface Segregation Principle`
  - Many client-specific interfaces are better than one general-purpose interface.
  - No client should be forced to depend on methods it does not use
5. `Dependency Inversion Principle`
  - One should depend upon abstractions, [not] concretions.


## Ruby On Rails

- `Convention over Configuration`
- `Fat models, skinny controllers`
- 
## Zen of Python

1. Beautiful is better than ugly.
2. Explicit is better than implicit.
3. Simple is better than complex.
4. Complex is better than complicated.
5. Flat is better than nested.
6. Sparse is better than dense.
7. Readability counts.
8. Special cases aren't special enough to break the rules.
9. Although practicality beats purity.
10. Errors should never pass silently.
11. Unless explicitly silenced.
12. In the face of ambiguity, refuse the temptation to guess.
13. There should be one—and preferably only one—obvious way to do it.
14. Although that way may not be obvious at first unless you're Dutch.
15. Now is better than never.
16. Although never is often better than right now.
17. If the implementation is hard to explain, it's a bad idea.
18. If the implementation is easy to explain, it may be a good idea.
19. Namespaces are one honking great idea—let's do more of those!

## Unix Philosophy

<http://www.faqs.org/docs/artu/ch01s06.html>

Unix Philosophy:
1. Write programs that do one thing and do it well.
2. Write programs to work together.
3. Write programs to handle text streams, because that is a universal interface.

Unix rule/principle:
1. Write simple parts connected by clean interfaces. (Rule of Modularity)
2. Clarity is better than cleverness. (Rule of Clarity)
3. Design programs to be connected to other programs. (Rule of Composition)
4. Separate policy from mechanism; separate interfaces from engines. (Rule of Separation)
5. Design for simplicity; add complexity only where you must. (Rule of Simplicity)
6. Write a big program only when it is clear by demonstration that nothing else will do. (Rule of Parsimony)
7. Design for visibility to make inspection and debuggingeasier. (Rule of Transparency)
8. Robustness is the child of transparency and simplicity.(Rule of Robustness)
9. Fold knowledge into data so program logic can be stupid and robust. (Rule of Representation)
10. In interface design, always do the least surprising thing. (Rule of Least Surprise)
11. When a program has nothing surprising to say, it should say nothing. (Rule of Silence)
12. When you must fail, fail noisily and as soon as possible. (Rule of Repair)
13. Programmer time is expensive; conserve it in preference to machine time. (Rule of Economy)
14. Avoid hand-hacking; write programs to write programs when you can. (Rule of Generation)
15. Prototype before polishing. Get it working before you optimize it. (Rule of Optimization)
16. Distrust all claims for “one true way”. (Rule of Diversity)
17. Design for the future, because it will be here sooner than you think. (Rule of Extensibility)

## Domain Driven Development

Reference:
- [Slideshare: DDD for Real](https://www.slideshare.net/cyriux/ddd-for-real)
- [Slideshare: DDD What Why How](https://www.slideshare.net/alexeyzimarev/ddd-what-why-how-74199460)

Books: 
- The blue book: Domain Driven Design by Eric Evan
- The red book: Implementing Domain-Driven Design by Vaughn Vernon