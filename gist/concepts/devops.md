---
layout: gist
title: DevOps
---

[Is DevOps a Title?](https://devops.com/is-devops-a-title/)

[What is ‘Site Reliability Engineering’?](https://landing.google.com/sre/interview/ben-treynor.html)

`Vertical Scaling` = add resource (CPU/RAM)

`Horizontal Scaling` = add machine

`ELK Stack` = Elasticsearch + Logstash + Kibana

`TIG Stack` = Telegraf + InfluxDB + Grafana

Model of cloud service:
- `IASS` = Infrastructure as a Service 
- `PASS` = Platform as a Service 
- `SASS` = Software as a Service

### High Availability

HA = High Availability = No Downtime, Always available

RPO = Recovery Point Objective = How much data can we loose

RTO = Recovery Time Objective = How long it take to Recovery

MTBF = Mean-Time-Between-Failures = Time between failures


### Instrumentation


[Logging vs Instrumentation](https://peter.bourgon.org/blog/2016/02/07/logging-v-instrumentation.html)


### Tools
- [Dockers](/docker.md): containerization
- [VirtualBox](https://www.virtualbox.org/): virtualization/hypervisor
- [Chef](/chef.md): configuration manager
- [Vagrant](/vagrant.md): create and configure portable development environment
- [Terraform](/terraform.md): create, combine and manage infrastructure across multiple providers
- [etcd](https://github.com/coreos/etcd): distributed key-value store
- [statd](https://github.com/coreos/etcd): stats aggregation
- [logstash](https://www.elastic.co/products/logstash): collect, parse, transform logs
- [kibana](https://www.elastic.co/products/kibana): browser-based analytics and search interface for Elasticsearch
- [rsyslog](http://www.rsyslog.com/) to forwarding log messages in an IP network
