---
layout: gist
title: Web Dev
category: Programming & Coding
---

Ref:
- [Google Web Fundamentals](https://developers.google.com/web/fundamentals)
- [RESTful Checklist](https://blog.mwaysolutions.com/2014/06/05/10-best-practices-for-better-restful-api/)
- [Best practives for A Pragmatic Restful API](https://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api)
- [Sticky vs Non Sticky Session](https://stackoverflow.com/questions/10494431/sticky-and-non-sticky-sessions)
- [public api list](https://github.com/toddmotto/public-apis)
- <http://getbem.com/naming/>


# Web Dev

- `PWA` = [Progressive Web Application](https://en.wikipedia.org/wiki/Progressive_web_applications)
- `3DS` = [3 Domain Structure](https://securionpay.com/blog/3d-secure/)


### Tool
- [ngrok](https://ngrok.com/): public urls for exposing local
- <https://developers.google.com/web/tools/lighthouse/>
- <http://xip.io/>


## Tech Stack
- `LAMP Stack`: Linux Apache MySql Php
- `LEMP Stack`: Linux Nginx MySql Php
- `LYME Stack`: Linux, Yaws, Mnesia, Erlang  
- `LYCE Stack`:Linux, Yaws, CouchDB, Erlang

## Standards
- [JSend Specification](https://github.com/omniti-labs/jsend)
- JSON API V1
- OpenAPI Specification (Swagger)
- [GraphQL](https://graphql.org/): query language for API, get many request in single request
- [XMPP](https://xmpp.org/): open standard for messaging and presence

## Generator
- [WooCommerce](https://woocommerce.com/): e-commerce with wordpress
- [GroceryCRUD](https://www.grocerycrud.com/): generate CRUD
- [Strapi](https://strapi.io/): Headless CMS

## Communication
- [Introduction to comet (reverse ajax)](https://www.ibm.com/developerworks/library/wa-reverseajax1/index.html)
- [Realtime and Websocket](https://www.slideshare.net/peterlubbers/html5-real-time-and-websocket/88-Types_of_Proxy_Servers_httpwwwinfoqcomarticlesWebSocketsProxyServers)
- [Websocket demo](https://www.websocket.org/index.html)
- [socket.io](https://socket.io/): a web-socket library
- <https://apifriends.com/api-streaming/push-sse-vs-websockets/>

## Webhooks

<https://restful.io/webhooks-dos-and-dont-s-what-we-learned-after-integrating-100-apis-d567405a3671>



## XPath

Expression to query from xml

Ref: 
- <https://www.freeformatter.com/xpath-tester.html>



## JSON Path

Expressions to refer to specific json structure

[Online Evaluator](http://jsonpath.com/)

Cheatsheet

| Function | Description | Example | Result |
|---|---|---|---|
|text|the plain text|kind is `{.kind}`|kind is List|
|`@`|the current object|{@}|the same as input|
|`.` or `[]`|child operator|`{.kind}` or `{[‘kind’]}`|List|
|`..`|recursive descent|`{..name}`|127.0.0.1 127.0.0.2 myself e2e|
|`*`|wildcard. Get all objects|{.items[*].metadata.name}|[127.0.0.1 127.0.0.2]|
|`[start:end :step]`|subscript operator|`{.users[0].name}`|myself|
|`[,]`|union operator|`{.items[*][‘metadata.name’, ‘status.capacity’]}`|127.0.0.1 127.0.0.2 map[cpu:4] map[cpu:8]|
|`?()`|filter|`{.users[?(@.name==“e2e”)].user.password}`|secret|
|`range, end`|iterate list|`{range .items[*]}[{.metadata.name}, {.status.capacity}] {end}`|[127.0.0.1, map[cpu:4]] [127.0.0.2, map[cpu:8]]|
|`“`|quote interpreted string|`{range .items[*]}{.metadata.name}{’\t’}{end}`|127.0.0.1 127.0.0.2|


## SEO


- <https://medium.com/@prestonwallace/3-ways-improve-react-seo-without-isomorphic-app-a6354595e400>

isomorphic 

link juice

## JWT

[JWT](https://jwt.io) = JSON Web Token

Reference: 
- [RFC7519](https://tools.ietf.org/html/rfc7519#section-4.1)
- [Stop using JWT for session](http://cryto.net/~joepie91/blog/2016/06/13/stop-using-jwt-for-sessions/)
- [Stop using JWT for session (part 2)](http://cryto.net/~joepie91/blog/2016/06/19/stop-using-jwt-for-sessions-part-2-why-your-solution-doesnt-work/)
- [SoulMachine Gist on Expiration, Revoke, and Secure JWT](https://gist.github.com/soulmachine/b368ce7292ddd7f91c15accccc02b8df)
- [What happen if your JSON web token is stolen](https://developer.okta.com/blog/2018/06/20/what-happens-if-your-jwt-is-stolen#how-to-detect-token-compromise)

Related Project:
- [Jwt-Session](https://github.com/byjg/jwt-session): JwtSession is a PHP session replacement. Instead of use FileSystem, just use JWT TOKEN. The implementation follow the SessionHandlerInterface.

Why: 
- Compact: small
- Self Contained: the actual token contains information about a given subject

Uses:
- Authorization
- Information Exchange

Structure: ```xxxxx.yyyyy.zzzzz```
- Header --> Token Type and Signing Algo
- Payload --> `Claims` = entity + additional data
- Signature --> Make sure data wasn't changed

# SOAP

Ref:
- [Open SOAP Service](http://www.dneonline.com/calculator.asmx)