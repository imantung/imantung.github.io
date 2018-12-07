---
layout: gist
title: Metrics & Log Monitoring
---

APM = Application Performance Monitoring

[Newrelic APM Courses](https://learn.newrelic.com/courses/intro_apm)

[Logging vs Instrumentation](https://peter.bourgon.org/blog/2016/02/07/logging-v-instrumentation.html)
- Logging: actionable 
- Instrumentation: meaningful number

RED Method: 
- (Request) Rate - the number of requests, per second, you services are serving.
- (Request) Errors - the number of failed requests per second.
- (Request) Duration - distributions of the amount of time each request takes.

USE Method:
- resource: all physical server functional components (CPUs, disks, busses, ...) [1]
- utilization: the average time that the resource was busy servicing work [2]
- saturation: the degree to which the resource has extra work which it can't service, often queued
- errors: the count of error events


`ELK Stack` (now called Elastic Stack)
- Elasticsearch
- Logstash
- Kibana
- Beat


`TIG Stack`
- Telegraf
- InfluxDB
- Grafana
- Kapasitor: 

[statsd](https://github.com/etsy/statsd)

[rsyslog](http://www.rsyslog.com/) to forwarding log messages in an IP network
