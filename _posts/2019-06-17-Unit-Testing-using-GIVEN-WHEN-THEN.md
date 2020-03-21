---
layout: post
title: "Unit Testing using GIVEN-WHEN-THEN Template(Part 1: Introduction)"
description: "Unit Testing using GIVEN-WHEN-THEN Template(Part 1: Introduction)"
date: 2019-06-17 17:45:00 +0700
comments: true
---

Writing a unit test sometimes is not easy and take more times than expected. One of the common methods to help in writing a good test is the Given-When-Then template. The template itself is part of Behavior-driven development (BDD).

## What is Unit Testing?
“Unit” can be defined as the smallest complete part of something. In this case, “unit” is a function or method of the system. Hence Unit Testing is a testing scenario for each function or method. Unit testing is automated and considered the cheapest one and the lowest part of the Test Pyramid.


## Unit Testing in the overall testing process
Testing can be a complicated process and at least serve for 2 purposes, first to ensure the software or system is not crashed (a.k.a System Testing) and to make sure whether the solution meets with the user need (a.k.a User Acceptance Test/UAT)

“Can Unit Testing ensure the system is working overall?” Not really.

“Therefore, is it actually important? User will test it anyway. It takes more time to write testing than the actual implementation.” Of course, it is important.

## Why need to write Unit Testing?
1. A safety-net
  Unit Testing is mandatory when coming with CI/CD. Without such a mechanism like automated testing as a safety-net, who can guarantee we not deploy a defective service.
2. Documentation
  Unit Testing also can consider better internal documentation than comments. It provides sample input and output, prerequisite to called the function and dependency
3. Efficiency
  Unit Testing can save a lot of time because the coder only needs to focus on a single unit without worrying it will break another part of the project (Well, at least we know if something broken). The coder can jump directly to test to a specific function/method rather than from program entry-point (the main() function)
4. Code Quality
  Existence of Unit Testing is one sign of a good project. Unit Testing not only said that the function/method is really working but in the process of writing it, it will affect and drive the entire project to good design.
5. Test-driven Development
  Unit Testing is more than a mere tool to verify/ensure the functionality but rather a blueprint of logical thinking. Only if you believe on this then Test-driven Development (TDD) can give its full merit. In short, TDD is about design not testing.

TDD is a methodology to develop/refactoring code driven by test. The TDD implementation maybe slightly differs each coder but basically writing test and code simultaneously. Both test and code implementation should be committed in a single git commit.

In most cases, TDD implementation begins with writing the test before the code implementation(another name of TDD is Test First Development). This very makes sense since Unit Testing act as a thought process.

However it no harm from writing the test after code implementation as long as you make sure deliver self-testing code. You can write the testing on your mind first then start writing the code implementation and write the actual test later. It almost impossible writing a complete unit testing before anything, the whole process is writing test, code implementation, fix the test, fix the implement, and so on.

This approach also useful when tackling the production issue, you can write Unit Testing to reproduce the bug before refactoring/fixing it. This trick is part of self-testing code concept as mentioned by Martin Fowler.

## Make specification for a function
Unit Testing is a thought process before the code, in other words, testing is a specification for the function. However, the function itself has inter-correlation each other. How we manage the specification?

```
function A(){
  B(); // call function B
  // Do something else
}
function B(){
   // Do something
}
```
Let’s say both `A()` and `B()` spinning a complex operation. What `B()` doing will be affected what `A()` do next.

“Should we re-specify everything we expect from `B()` when writing unit testing for `A()`?” Maybe yes but not all.

“What happens we happen if have `C()` that called `B()`?”

In this case, we can keep continuing re-specify each “child” function which is redundant action and not necessary. We can assume that B() completely working perfectly or we just focus on the “parent”.

## Behaviour-driven Development
Rather than focus on each function, it more makes sense to write on the overall behavioral expectation of the system and this approach called Behaviour-driver Development (BDD).

The idea is to combine the Unit Testing with a business perspective. BDD is an extension of TDD yet well suit with Domain-driven Development (DDD). The testing should be a narrative and speak in Ubiquitous Language. One of the recommended patterns for the narrative is Given-When-Then (GWT).

## Given-When-Then
This is a typical format of GWT
```
GIVEN a context
WHEN some condition
THEN expect some output
```

With GWT template, it will be easier to understand what the function/method do. Once you defined Given-Then-When, that’s mean you already finish thinking about the control flow of your process and eventually, coding will be easier (But this is not as easy as it's said). GWT can be useful when refactoring the code to become more readable.

In the next article, the author will try to give examples of how GWT drive the code refactoring in his favorite language Go.

*This article also post on [medium](https://medium.com/@imantunggono/unit-testing-using-given-when-then-template-part-1-introduction-59073626df1a?postPublishedType=initial)*