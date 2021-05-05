---
layout: gist
title: DevOps
category: System Infra
---

# DevOps

SecOps = DevOps + Security

Good Read:
- [Is DevOps a Title?](https://devops.com/is-devops-a-title/)
- [What is ‘Site Reliability Engineering’?](https://landing.google.com/sre/interview/ben-treynor.html)
- [SRE Book by Google](https://landing.google.com/sre/sre-book/toc/)
- [The devops transformation](https://www.slideshare.net/benrockwood/lisa-2011-keynote-the-devops-transformation)
- <https://medium.com/cracking-the-data-science-interview/how-operating-systems-work-10-concepts-you-should-know-as-a-developer-8d63bb38331f>

DevOps Overview:
1. Code — code development and review, **source code management** tools, code merging
2. Build — **continuous integration** tools, build status
3. Test — **continuous testing** tools that provide feedback on business risks
4. Package — **artifact repository**, application pre-deployment staging
5. Release — change management, release approvals, **release automation**
6. Configure — infrastructure configuration and management, **Infrastructure as Code** tools
7. Monitor — **applications performance monitoring**, end–user experience

DevOps Movement Core value --> CAMS:
- Culture
- Automation
- Measurement
- Sharing

## Deployment/Release Strategy

- [Canary Release](https://semaphoreci.com/blog/what-is-canary-deployment): making staged release
- [Green Blue Deployment](https://docs.cloudfoundry.org/devguide/deploy-apps/blue-green.html): reduces downtime and risk by running two identical production environments called Blue and Green

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

## Automation

- [Rundeck](https://www.rundeck.com/): Self-Service Operations Console
- [Sonarqube](https://www.sonarqube.org/): Continuous Code Quality
- [SumoLogic](https://www.sumologic.com): machine data analytics platform
- [Scalyr](https://www.scalyr.com/): log search and management
- [Stackdriver](https://cloud.google.com/stackdriver/): Monitoring and management for services, containers, applications, and infrastructure
- [prometheus](https://prometheus.io/docs/introduction/overview/)

## Log Journal

- [Logrotate](https://serversforhackers.com/c/managing-logs-with-logrotate)
- [Remove journal log and abrt log](https://unix.stackexchange.com/questions/130786/can-i-remove-files-in-var-log-journal-and-var-cache-abrt-di-usr)


## IAM

Ref:
- <https://github.com/kdeldycke/awesome-iam>
- <https://wso2.com/whitepapers/identity-architect-ground-rules-ten-iam-design-principles/>
- <https://github.com/ory/oathkeeper>


Access Control Model:
- Attribute-Based Access Control
- Role-Based Access Control


## Observability


`APM` = Application Performance Monitoring

APM Vendor:
- [Datadog](https://www.datadoghq.com/)
- [Newrelic](https://newrelic.com/) 

[Logging vs Instrumentation](https://peter.bourgon.org/blog/2016/02/07/logging-v-instrumentation.html)
- Logging: actionable logs
- Instrumentation: meaningful number/metrics

[RED Method](https://www.weave.works/blog/the-red-method-key-metrics-for-microservices-architecture/)
- (Request) Rate - the number of requests, per second, you services are serving.
- (Request) Errors - the number of failed requests per second.
- (Request) Duration - distributions of the amount of time each request takes.

[USE Method](http://www.brendangregg.com/usemethod.html)
- Utilization: the average time that the resource was busy servicing work
  - as a percent over a time interval. eg, "one disk is running at 90% utilization".
- Saturation: the degree to which the resource has extra work which it can't service, often queued
  - as a queue length. eg, "the CPUs have an average run queue length of four".
- Errors: the count of error events
- resource: all physical server functional components (CPUs, disks, busses, ...) 

[4 Golden Signal](https://landing.google.com/sre/sre-book/chapters/monitoring-distributed-systems/)
- Latency:  The time it takes to service a request.
- Traffic: A measure of how much demand on the system.
- Errors: The rate of failed requests.
- Saturation: A measure of how “full” a service is, often measured by latency.

`ELK Stack` (now called Elastic Stack)
- Elasticsearch: data
- Logstash
- Kibana: Visualization
- Beat

`TIG Stack`
- Telegraf
- InfluxDB
- Grafana
- Kapasitor: 

[statsd](https://github.com/etsy/statsd)

[rsyslog](http://www.rsyslog.com/) to forwarding log messages in an IP network

[prometheus](https://prometheus.io/)

Tracing:
- <https://www.jaegertracing.io/>
- <https://opentracing.io/>

## Twelve Factor App

[12factor.net](https://12factor.net/)

1. `Codebase`: One codebase tracked in revision control, many deploys
2. `Dependencies`: Explicitly declare and isolate dependencies
3. `Config`: Store config in the environment
4. `Backing services`: Treat backing services as attached resources
5. `Build, release, run`: Strictly separate build and run stages
6. `Processes`: Execute the app as one or more stateless processes
7. `Port binding`: Export services via port binding
8. `Concurrency`: Scale out via the process model
9. `Disposability`: Maximize robustness with fast startup and graceful shutdown
10. `Dev/prod parity`: Keep development, staging, and production as similar as possible
11. `Logs`: Treat logs as event streams
12. `Admin processes`: Run admin/management tasks as one-off processes
