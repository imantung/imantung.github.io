---
layout: gist
title: JWT Token
---

# JWT

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