---
layout: gist
title: Security
---


[IDOR](https://www.bugcrowd.com/how-to-find-idor-insecure-direct-object-reference-vulnerabilities-for-large-bounty-rewards/)

gitrob

[CSRF](https://en.wikipedia.org/wiki/Cross-site_request_forgery)

### Security Testing Process

Vulnerability assessments and penetration tests follow much of the same process, as they both start with the:
1. Phase-1	Reconnaissance	
  This involves gathering information about the web application through direct and indirect means, such as analysing DNS records, web search results and other information that is available. The objective is to identify the attack surface.
2. Phase-2	Application Mapping
  This involves spidering or accessing the web/mobile app and identifying deficiencies in the web server and software configuration.
3. Phase-3	Discovery	
  Vulnerabilities such as information leakage, insecure authentication are identified. At this point a vulnerability assessment is complete, but the penetration test takes the process a step further.
4. Phase-4	Exploitation
  This is where attempts are made to exploit the identified vulnerabilities to simulate real world attacks.
5. Phase-5	Reporting
  Writing down the proof of concept, severity of the issues and impact on the system to document.
6. Phase-6	Mitigation
  Follow up with dev team, providing recommendation and other protective measures to fix the security issues.
  

OWASP Top 10 Application Security Risks: 


Tools:
- burpsuite, owasp ZAP:	MiTM (Man in the middle) Proxy Tool
- apktool, dex2jar, JD-gui:	Android apps reverse engineering toolkits
- sqlmap:	Automated tool for testing SQL Injections
- drozer, qark:	Android app components security testing tools
- DirBuster:	Tool for Brute-forcing directories in web applications
- nmap:	Discovering services, open ports running on remote system
- arachni:	Web based automated security scanner