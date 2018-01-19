---
layout: post
title: "Pairing and Test Driven"
description: "commentary on pair programming and test driver development"
date: 2018-01-17 10:51:00 +0700
tags: ["tdd", "unit testing", "pair programming", "philosophy"]
comments: true
---

Information Technology is philosophical and full of opinion. You can’t tell what is right until it’s really not working. Design principle most likely a religion for some people. I have witness many of technical debate and sometimes as fierce as fight to death. The believers often have little modification on their practice according their understanding and conditions.  

Most common practice today on development probably is pair programming & TDD. No one dare to against it but is everyone really embrace it? On this writing, I'm trying to share what I believe on these method.

## Pair Programming

Pair programming is 2 programmer looking at same monitor and there is only 1 keyboard but they must writing some code. At first I thought pair programming is mere [knowledge sharing](https://en.wikipedia.org/wiki/Knowledge_sharing) session. While it’s understandable for junior-senior pair, how about pair programming of two programmer with same level of skill. Is it senior-senior pair waste the resource and junior-junior is like 2 baby trying to walk together. It maybe right if you thinking it only sharing knowledge session, but it's way more than it.

Pair programming is especially encourage by [extreme programming](https://en.wikipedia.org/wiki/Extreme_programming). Pair programming is really helping to eliminate distraction during the development and make programmer focus to "extreme" level. In fact the name of extreme programming is come from how this methodology promote "best practice" to extreme level. Regardless 2 person is working at same single task, [the result is really worth it in term of quality and speed](http://wiki.c2.com/?PairProgrammingCostsBenefits).

Pair programming also psychologically tell this is "our code" and not "my code". The developer doesn't need take all the burden. More people will have context of the project and they will not hesitate to contribute on “their own code”. Being replaceable on one project is ensure your long last survival on tech company.

Typically on pairing programming, the one who own the keyboard called "driver" while other is act as "observer" or "navigator" of code, and simultaneous switch the role. Personally I don’t like to follow this kind of rule. A pairing programming should be a simple and fun collaboration regardless who take in charge, which one that’s more senior, who is became driver or navigator. The important is people have the same goal and don’t ignore his partner.

There is some variation of pairing programming. Ping pong programming is pair programming combine with TDD, 1 programmer make the test while others is make the code implementation and vice-versa. Mob programming where whole team (more than 2 people) writing code together with same computer.

However I don’t think pair programming is not ideal for any situation or condition. Some task without clear requirement and need a lot of research may not suitable to this kind practice. Designing a framework is also better performed by single experienced engineer. Pair programming must support by enough man-power and team culture or it may lead to contra productive.

## Test Driven Development

Test is important to detect defect and make sure everything went as expected. Generally there 4 level of test which determine how depth the testing is.
1. Unit testing: the smallest component of system
2. Integration testing: combination of several unit.
3. System testing: the whole units/system
4. Acceptance testing: is user accept the system.

How we do testing can be classification of test like static-dynamic test or black-white testing. Testing is really not simple. it's own discipline on software development.

Unit testing is important especially for CI/CD. When you submit your code to the repo, it’s automatically deploy to (staging) machine. Without such thing as

What is unit testing.
Unit testing coverage
why unit testing important
Test Driven Development. How test driven the project driven. Later on it’s not test anymore about became behaviour (BDD). The different between BDD & TDD.
TDD is die, long live the test.
Unit testing became formalitas.   

Closing word: we need
