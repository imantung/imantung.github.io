---
layout: post
title: "Pairing and Test Driven"
description: "commentary on pair programming and test driver development"
date: 2018-01-17 10:51:00 +0700
comments: true
---

Information Technology is philosophical and full of opinion. You can’t tell what is right until it’s really not working. Design principle most likely a religion for some people. I have witness many of technical debate and sometimes as fierce as fight to death. And most common holistic practice today on development probably pair programming & TDD. No one dare it to against this kind of practice but so far people embrace it? It's almost impossible to find purist follower and everyone is being pragmatic by make little modification according their understanding and conditions.

## Pair Programming

> The adjustment period from solo programming to collaborative programming was like eating a hot pepper. The first time you try it, you may not like it because you are not used to it. However the more you eat it, the more you like it. ~Anonymous

At first, I thought [Pair Programming](https://en.wikipedia.org/wiki/Pair_programming) is mere [knowledge sharing](https://en.wikipedia.org/wiki/Knowledge_sharing) session. While it’s understandable for Senior-Junior pair, how about pair programming of two programmers with same level of skill. Is it Senior-Senior pair waste the resource and Junior-Junior is like 2 babies trying to walk together. It may be right if you thinking it only sharing knowledge session, but Pair Programing way more than it.

Pair programming is popularized by [Extreme Programming (XP)](https://en.wikipedia.org/wiki/Extreme_programming) and it really helps to eliminate distraction during the development and make programmer focus to "extreme" level. In fact, the name of extreme programming is come from how this methodology promotes "best practice" to an extreme level. Pair programming also psychologically tell this is "our code" and not "my code". The developer doesn't need to take all the burden alone. And more people will have the context of the project and they will not hesitate to contribute on “their own code”. Being replaceable on one project is important to your long last survival on tech company. And regardless 2 persons are working at a same single task, [the result is really worth it in term of quality and speed](http://wiki.c2.com/?PairProgrammingCostsBenefits).

On pairing programming, the one who owns the keyboard called "driver" while other is act as "observer" or "navigator", then they switch the role. Personally, I don’t like to strictly follow this rule. In my opinion, a pairing should be a simple and fun collaboration regardless who take in charge, which one that’s more senior, who became drivers or navigator. What the important are people take care of task and his partner.

However, pair programming may not ideal for any situation and condition. For example, working on a project like [proof of concept](https://en.wikipedia.org/wiki/Proof_of_concept) that required a lot of research may be better performed by solo. Without sufficient numbers of developer and encouragement from management, it will be hard to actually practice it in real life.

Some variation of pair programming
- Ping pong programming --> is pair programming combine with TDD; 1 programmer make the test while others is make the code implementation and vice-versa.
- Cross Functional Pairing --> usually hardware and software engineer to make embedded system
- Mob programming --> whole team (more than 2 people) writing code together.

## Test Driven Development

> This is about as extreme as the Taliban. Testing is good. Write [tests] before, during, and after. ~Ralph Kelsey

[Test](https://en.wikipedia.org/wiki/Software_testing) is important to a detect defect and makes sure everything went as expected. Generally, the test can be divided by `Unit Test`, `Integration Test`, `System Test` and `Acceptance Test` according to how depth the testing is. How we do testing can be classified to [static-dynamic](http://www.softwaretestingclass.com/difference-between-static-testing-and-dynamic-testing/) test or [black-white](http://softwaretestingfundamentals.com/differences-between-black-box-testing-and-white-box-testing/) testing. Testing on software development is really not a simple task and much more than it. Testing became its own discipline on software development.
1. Unit testing: the smallest component of system
2. Integration testing: combination of several unit.
3. System testing: the whole units/system
4. Acceptance testing: is user accept the system.

But the test that means in [Test Driven Development](https://en.wikipedia.org/wiki/Test-driven_development) is [Unit Testing](https://en.wikipedia.org/wiki/Unit_testing). Unit Testing is sort of script/code that calls the function/method with a set of sample input and checks whether the result is same as expected result. So naturally, it is a documentation of to how run the function/method.

Unit testing is especially important for [CI/CD](https://en.wikipedia.org/wiki/CI/CD). On [Continuous Integration (CI)](https://en.wikipedia.org/wiki/Continuous_integration), works of many developers automatically being merged as one and without Unit Testing is hard to find if my modification will break someone else part. On [Continuous Delivery (CD)](https://en.wikipedia.org/wiki/Continuous_integration), Unit Testing is even more important because everything automatically deploys to the machine. Without such mechanism like unit testing, what happens if the broken code being deployed? Unit testing is a genuine practice of compassion in software development, by writing good unit testing you don't wanna bring any trouble to anyone and make everyone happy.

Unit testing is so important so it's driven the whole development, split the development into small iteration based on the test. "Driven" mean motivation and obsession of how development should be. The obvious sign of this obsession is writing test first before writing anything else. The motivation is a high score on [test coverage report](http://www.softwaretestingclass.com/test-coverage-in-software-testing/). TDD is also one of Extreme Programming practices.

However, writing Unit Testing first is not easy and cumbersome. [Not everyone agrees](http://david.heinemeierhansson.com/2014/tdd-is-dead-long-live-testing.html) while others like to performed TDD even on smaller step ([baby step](https://softwareengineering.stackexchange.com/questions/109990/how-baby-are-your-baby-steps-in-tdd)). I don't think it's possible to write a perfect test before writing the code, the process is actually back and forth from test to code implementation. Consider of this, I prefer to push both test and code in same git commit for each function/iteration/story instead only test or code which is I think it's not effective and flooding git history.

It's not easy to write Unit Testing and it even harder to write a good framework to support it, Unit Testing can tell that your code has good [coupling](https://en.wikipedia.org/wiki/Coupling_(computer_programming)). So what-called by [TDD is about design and best practices, not testing itself](http://www.drdobbs.com/tdd-is-about-design-not-testing/229218691). There is pitfall where people blindly write unit testing to get a good score of coverage, they usually [use a lot mocking which is considered a smell of code today](https://medium.com/javascript-scene/mocking-is-a-code-smell-944a70c90a6a).
