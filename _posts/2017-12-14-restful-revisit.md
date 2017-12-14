---
layout: post
title: "RESTful Revisit"
date: 2017-12-14 16:19:28 +0700
tags: ["restful"]
---

Sometimes I got opportunities to interview new candidate and I always asking "What is RESTful? What different between between RESTful and Non-RESTFul?" Surprisingly not many can explain it even though they already used it on their previous company.

RESTful is one of style or architectural design for Web API. It's stand of [Representational State Transfer]().

There are [6 architectural constraints](http://www.restapitutorial.com/lessons/whatisrest.html) for Web API to be called RESTful:
- Uniform Interface - naming (URI) and verb (http method)
- Stateless - server don't save client state, the message itself is represented the client state
- Cacheable - response should be cacheable
- Client-Server - separation of concern between client and server
- Layered System - Client connect to server through architectural ayer (software/hardware)
- Code on Demand (Optional) - Client allow to downloading and executing code in the form of applets or scripts

Based on constraint, Leonard Richardson analyzed dozen of web api and make [Richardson Maturity Model](https://restfulapi.net/richardson-maturity-model/)
- Level 0 - Single URI and Single verb
- Level 1 - Many URI and Single verb
- Level 2 - This is RESTful
- Level 3 - [HATEOS](https://en.wikipedia.org/wiki/HATEOAS)

A lot we can explore about RESTful. I recommend to read [this article](https://www.linkedin.com/pulse/restful-api-design-revisit-fei-yao/) to get today update.
