---
layout: post
title: "Ruby or Java or Golang"
description: "commentary between Ruby, Java and Golang for microservices"
date: 2017-12-25 11:24:38 +0700
tags: ["java", "golang", "ruby", "microservices"]
comments: true
---

In our company, we are adopt [microservices](http://microservices.io/) architectural which is each product/service can have different language and technology stack. And these are 3 most chosen language: [Ruby](http://rubyonrails.org/), [Java](https://www.java.com/en/), [Golang](golang.org).

Which one is better for microservices? None. I always believe that choice of language and architecture design decision is subjective based on knowledge, experience and preference of developer. Even [design pattern](https://en.wikipedia.org/wiki/Software_design_pattern) almost felt like propaganda for me. Every programming language have pro-contra and it's not only single person decision. Golang maybe powerful, but will you choose it if only yourself that able writing go code in whole company? We must consider people, learning curve, team culture and project needs before choose the language.

*Disclaimer: This writing is my personal opinion of java/ruby/go without any intention to disregard specific programming language.*

### Ruby

> Programmer's best friends ~Rubyist

The reason for me to using [Ruby](https://www.ruby-lang.org/en/) because of [Ruby on Rails](http://rubyonrails.org/) framework. This framework offers [convention over configuration](https://en.wikipedia.org/wiki/Convention_over_configuration) which is saving much time and effort because developer doesn't need to decide many aspect of development. Rails have clear standard how to organize file, testing, handle database, etc. We even doesn't need to write code from scratch, just [scaffolding](https://en.wikipedia.org/wiki/Scaffold_(programming)) then edit few line of code. Development is fast and it's easier to apply [TDD](https://en.wikipedia.org/wiki/Test-driven_development) and rotate programmer to another rails project. Many framework is also [inspired by rails](https://www.quora.com/What-are-some-web-frameworks-that-use-conventions-similar-to-Rails). 

However the language is [relative slower](https://stackoverflow.com/questions/2529852/why-do-people-say-that-ruby-is-slow) by nature, not mentions it's [doesn't support real multithreading](https://stackoverflow.com/questions/56087/does-ruby-have-real-multithreading) too. Using [JRuby](http://jruby.org/) is better option than [Ruby MRI](https://en.wikipedia.org/wiki/Ruby_MRI). The rails itself design to develop web application based on its best practice (rails conventions), so it may tricky if you need to make custom configuration or something different with the conventions.

Ruby on Rails is great choice for developing simple portal or [RESTFul](/restful-revisit) services in a short time.

## Java

> A Programmer had a problem. He decided to use Java. He now has a ProblemFactory. ~Java Joke

Java is [object oriented](https://en.wikipedia.org/wiki/Object-oriented_programming) and mature programming language. Most developer already familiar about this beast and I don't want to say much. Regardless its bad and good, Java is still industry standard of how programming language should be. Maybe it's most supported language in open source community especially on [apache community](https://www.apache.org/). In search of java-killer-language, another programming language is born yet running on top of [JVM](https://en.wikipedia.org/wiki/Java_virtual_machine) like [Scala](https://www.scala-lang.org/), [Kotlin](https://kotlinlang.org/), [Clojure](https://clojure.org/), etc.

I was working with java for mobile apps, automation tool and some services but I still doesn't have preference library/framework for backend service. I have short experience with [Spring](https://spring.io/) [Hibernate](http://hibernate.org/) and not fans of it. [Spark Framework](http://hibernate.org/) seem promising but java itself have too many configurable and [boilerplate](https://en.wikipedia.org/wiki/Boilerplate_text) that slow the development process. You also need to [tunning the JVM](https://docs.oracle.com/cd/E13222_01/wls/docs81/perform/JVMTuning.html) for best performance. So development wise, personally I'm avoid to using java beside it may have good performance.

Java probably best option for project that required some apache software or have some open source dependency. Java also good start to learn programming since it's straight forward, conceptual and less magical then most popular programming language today.

## Golang

> To put it simply, if Docker had not been written in Go, it would not have been as successful. ~Solomon Hykes

Go or Golang is language created by google. It's native programming language which is produce binary program that running directly on top of machine hardware, yet it's [cross platforms](https://golang.org/doc/install/source#environment) so the source code for window is same with for linux. The deployment is easy (just copy paste the binary) and the performance is good by nature. 

Coding in golang is quite simple and kinda felt like writing some [scripting language](https://en.wikipedia.org/wiki/Scripting_language). However it's have unique [programming paradigm](https://en.wikipedia.org/wiki/Programming_paradigm) and philosophy. Object oriented approach in golang is not [inheritance](https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming)) but using [composition](https://www.goinggo.net/2015/09/composition-with-go.html). It doesn't support exception since it [threat error as value](https://blog.golang.org/errors-are-values). 

Concurrency is one big plus of golang, it's using [parallelism instead of multithread](https://blog.golang.org/concurrency-is-not-parallelism). The lightweight thread in golang called [goroutine](https://tour.golang.org/concurrency/1). Every goroutine is isolated with another goroutine and only can communicate via [channel](https://tour.golang.org/concurrency/2). So no more [lock](https://en.wikipedia.org/wiki/Lock_(computer_science)) for synchronize. Golang even doesn't provide [pool](https://en.wikipedia.org/wiki/Thread_pool) by default, maybe because goroutine is super cheap, [1000 goroutine is comparable with 10 common thread.](http://tleyden.github.io/blog/2014/10/30/goroutines-vs-threads/)

[Garbage collection](https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)) and [pointer](https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)) also nice. We can say that golang have better garbage collection compare with other so far. Check my previous post regarding [memory on go](/memory-in-go). 

I like [Reflection](https://en.wikipedia.org/wiki/Reflection_(computer_programming)) in golang too, it's much easier compare to java. But [collection](https://en.wikipedia.org/wiki/Collection_(abstract_data_type)) library is not so good.

Because golang relative young, discussion is still happening around best practice on golang. The choice of library is not as many as other popular language.

I prefer Golang for any possible project because of brute strength, simple and popularity. Its popularity is guarantee the support from community and job security :-p.
