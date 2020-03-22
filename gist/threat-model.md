---
layout: gist
title: Threat Modeling
---

- (Threat Modeling: uncover vulnerabilities without looking at code)[https://www.youtube.com/watch?v=Fmp9UFjPiJs]

## STRIDE

Reference:
(Wiki)[https://en.wikipedia.org/wiki/STRIDE_(security)]

Description:
- **S**poofing: Pretending to be someone you are not
- **T**ampering: Modifying Data
- **R**epudiation: "I didn't do it, nobody saw me do it, can't prove anything"
- **I**nformation Disclosure: Leakage of Information that should be private 
- **D**enial of Service: Stopping something from working or responding
- **E**levation of Privilage: Upgrading from user to administrator access

Mitigation Perfective:
- **S**poofing: Strong authentication
- **T**ampering: Encryption
- **R**epudiation: Strong authentication and authorization
- **I**nformation Disclosure: Encryption
- **D**enial of Service: Resilience 
- **E**levation of Privilage: Authorization
