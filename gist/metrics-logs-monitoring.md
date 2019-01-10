---
layout: gist
title: Metrics & Log Monitoring
---

APM = Application Performance Monitoring

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
