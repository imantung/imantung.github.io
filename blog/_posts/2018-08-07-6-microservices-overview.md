---
layout: post
title: "Microservice Overview"
description: "commentary on microservices"
date: 2018-08-07 20:00:29 +0700
tags: ["microservice"]
comments: true
---

The last couple of weeks is busy weeks (for some people) in our company because we conduct a series of workshop for undergraduate students. Apparently, I volunteer to give over one or two topics of knowledge sharing. One of the topics I brings is overview of [microservices](https://en.wikipedia.org/wiki/Microservices), a popular and fancy architecture.x So I would like to reshare here to give some basic understanding about what is microservices.

First, we will talk about [scalability](https://en.wikipedia.org/wiki/Scalability). We can scale the application to vertically or horizontally. Vertical scaling basically just add more resource like CPU or memory. While horizontal scaling means adding more instance to handle the burden. However, adding an instance doesn't mean it works right away. Need some mechanism to make horizontal scaling works, e.g. [load balancer](https://en.wikipedia.org/wiki/Load_balancing_(computing)).

How to make scaling even better? Let's break down the [monolith](https://en.wikipedia.org/wiki/Monolithic_application) into multiple service and scale each service independently. This approach called Microservices Architecture (MSA). Not only impact on the system, it also change how the team scaling because each service can be developed by an independent team. 

The interservice communication strategy is [Restful](https://en.wikipedia.org/wiki/Representational_state_transfer), [RPC](https://en.wikipedia.org/wiki/Remote_procedure_call) or [message queue](https://en.wikipedia.org/wiki/Message_queue). However, it's not cheap and not free from problems. Information barrier may happen, integration testing is harder and deployment can be complicated. With a number of teams, it's hard to have standard across the system and even isolate one team with another. Many things need to reconsider before really migrate to microservices, as [Martin Fowler said](https://martinfowler.com/bliki/MonolithFirst.html), microservice is a classic [YAGNI](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it)

How is micro is microservice? Almost all principles of OOP (like the [Single Responsible Principle](https://en.wikipedia.org/wiki/Single_responsibility_principle), [Common Closure
Principle](http://wiki.c2.com/?CommonClosurePrinciple), [Law of Demeter](https://en.wikipedia.org/wiki/Law_of_Demeter) and [Aspects Oriented Programming](https://en.wikipedia.org/wiki/Aspect-oriented_programming)) can inspire to determine the ideal service. From the organization perspective, the service should develop/maintain by small enough team (["two pizza" team](https://whatis.techtarget.com/definition/two-pizza-rule)) and must be autonomous. You may decompose the original monolithic service by business capability, domain, verb or noun services.

There are a few things that may require to make microservice working. Once you start microservices, the number of servers will be abundant, without such thing as [DevOps](https://en.wikipedia.org/wiki/DevOps), you will fall to deployment hell. Software development must implement [agile](http://agilemanifesto.org/) to keep up with the changes and spirit of microservices. Lastly, you must code your application as it's [SAAS](https://en.wikipedia.org/wiki/Software_as_a_service), which leads us to the [12 Factor Apps Principle](https://12factor.net/).

I hope this article can give a few pointers to those who start to learn or use microsevices.

*This article also post on [medium](https://medium.com/@imantunggono/microservice-overview-4f6b236089c7)*
