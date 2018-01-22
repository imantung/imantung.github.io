---
layout: post
title: "RESTful Revisit"
date: 2017-12-14 16:19:28 +0700
description: "basic concept of restful"
tags: ["restful"]
comments: true
---

Sometimes I got opportunities to interview new candidate and I always asking "What is RESTful? What different between between RESTful and Non-RESTFul?" Surprisingly not many can explain it even though they already used it on their previous company.

RESTful is one of style or architectural design for Web API. It's stand of [Representational State Transfer](). Today RESTful become best practice and almost web API design to be RESTful. However people often misjudge that all web API is RESTful api.

There are [6 architectural constraints](http://www.restapitutorial.com/lessons/whatisrest.html) for Web API to be called RESTful:
1. Uniform Interface - Naming (URI) and verb (http method)
2. Stateless - Server don't save client state, the message itself is represented the client state
3. Cacheable - Response should be cacheable
4. Client-Server -Separation of concern between client and server
5. Layered System - Client connect to server through architectural ayer (software/hardware)
6. Code on Demand (Optional) - Client allow to downloading and executing code in the form of applets or scripts

Based on this constraint, Leonard Richardson analyzed dozen of web api and divided them in four categories called [Richardson Maturity Model](https://restfulapi.net/richardson-maturity-model/)
- Level 0 - Single URI and Single verb
- Level 1 - Many URI and Single verb
- Level 2 - This is RESTful
- Level 3 - [HATEOS](https://en.wikipedia.org/wiki/HATEOAS)

I also recommend to read this another [RESTful revisit ](https://www.linkedin.com/pulse/restful-api-design-revisit-fei-yao/) article.
