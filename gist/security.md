---
layout: gist
title: Security
---

Ref:
- [CIS Benchmark](https://www.advancedcyber.co.uk/it-security-blog/six-essential-things-to-know-cis-benchmark): 140+ configuration guidelines for various technology
- [OWASP](https://www.owasp.org/index.php/Main_Page): Security community
- [ISO/IEC 27001](https://www.iso.org/isoiec-27001-information-security.html)
- [PCI DSS](https://en.wikipedia.org/wiki/Payment_Card_Industry_Data_Security_Standard)
- [Security Testing Guide v4](https://www.owasp.org/images/1/19/OTGv4.pdf)

### Color Wheel 

[InfoSec colour wheel](https://hackernoon.com/introducing-the-infosec-colour-wheel-blending-developers-with-red-and-blue-security-teams-6437c1a07700)
- Red Team: Offensive security
- Blue Team: Defensive security
- Yellow Team: the builder
- Purple Team (Red + Blue): Integrating defensive tactics with offensive result
- Orange Team (Red + Yellow):
- Green Team (Blue + Yellow)
- White Team 

## Domain

[Type of InfoSec](https://www.cisco.com/c/en/us/products/security/what-is-information-security-infosec.html):
- Application security
- Cloud security
- Cryptography
- Infrastructure security
- Incident response: monitors for and investigates potentially malicious behavior
- Vulnerability management: scanning an environment for weak points (such as unpatched software) and prioritizing remediation based on risk

### Certificate

- CompTIA
- CISSP (Certified Information Systems Security Professional)

### Web Application

- [CSRF](https://en.wikipedia.org/wiki/Cross-site_request_forgery)
- [IDOR](https://www.bugcrowd.com/how-to-find-idor-insecure-direct-object-reference-vulnerabilities-for-large-bounty-rewards/)
- [HTTP Security Hardening](https://www.keycdn.com/blog/http-security-headers)
- [Content Security Policy](https://www.html5rocks.com/en/tutorials/security/content-security-policy/)


[OWASP Top 10 Application Security Risks](https://www.synopsys.com/blogs/software-security/owasp-top-10-application-security-risks/): 
- A1: Injection
- A2: Broken authentication
- A3: Sensitive data exposure
- A4: XML external entities (XXE)
- A5: Broken access control
- A6: Security misconfiguration
- A7: Cross-site scripting (XSS)
- A8: Insecure deserialization
- A9: Using components with known vulnerabilities
- A10: Insufficient logging and monitoring

## Networking

- [sshguard](https://www.sshguard.net/): protect brute-force by monitoring system logs, defecting attack, block attack using firewall
- [DNS Blocklists](https://wiki.apache.org/spamassassin/DnsBlocklists#dnsbl-block)

## Secure Coding

- [OWASP Secure Coding Checklist](https://www.owasp.org/images/0/08/OWASP_SCP_Quick_Reference_Guide_v2.pdf)

### Penetration Test

Vulnerability assessments and penetration tests follow much of the same process, as they both start with the:
1. **Reconnaissance**: This involves gathering information about the web application through direct and indirect means, such as analysing DNS records, web search results and other information that is available. The objective is to identify the attack surface.
2. **Application Mapping**: This involves spidering or accessing the web/mobile app and identifying deficiencies in the web server and software configuration.
3. **Discovery**: Vulnerabilities such as information leakage, insecure authentication are identified. At this point a vulnerability assessment is complete, but the penetration test takes the process a step further.
4. **Exploitation**: This is where attempts are made to exploit the identified vulnerabilities to simulate real world attacks.
5. **Reporting**: Writing down the proof of concept, severity of the issues and impact on the system to document.
6. **Mitigation**: Follow up with dev team, providing recommendation and other protective measures to fix the security issues.
  

## Tools

- `burpsuite`, `owasp ZAP`:	MiTM (Man in the middle) Proxy Tool
- `apktool`, `dex2jar`, `JD-gui`:	Android apps reverse engineering toolkits
- `sqlmap`:	Automated tool for testing SQL Injections
- `drozer`, `qark`:	Android app components security testing tools
- `DirBuster`:	Tool for Brute-forcing directories in web applications
- `nmap`:	Discovering services, open ports running on remote system
- `arachni`:	Web based automated security scanner