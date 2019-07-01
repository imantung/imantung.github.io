---
layout: gist
title: Deployment
---

- canary
- green blue deployment

### Infastructure as Code

- [Terraform](/terraform.md): create, combine and manage infrastructure across multiple providers
- [Chef](/chef.md)

### CI/CD

- [octopus](https://octopus.com/)
- [gitops](https://www.weave.works/technologies/gitops/)
- [jenkins](https://jenkins.io/)
- [drone](https://drone.io/)

### Virtualization

- [Dockers](/docker.md): containerization
- [VirtualBox](https://www.virtualbox.org/): virtualization/hypervisor
- [Vagrant](/vagrant.md): create and configure portable development environment


### Deployment Document template

Template 1
```
Change Summary:
Committers:
SERVICES IMPACTED:
Service Details:
Service Rollback
  - Rollback strategy
Service Component
  - Database
  - Security
  - Monitoring
  - Cache
  - API Changes
  - Analytics Impact
  - App Impact
```

Template 2
```
- Description/Change Summary/Impact
- Prerequisite/Configuration/Service component
- Monolith session redis
- Deploy Version
- Additional Deploy Instruction
- Rollback Version
- Additional Rollback Instruction
- Target Deployment Date
- Approval 
```
