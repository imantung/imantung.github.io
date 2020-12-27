---
layout: gist
title: Distributed Computing
---

# System Design

Ref
- [Distributed systems cheat sheet](http://dimafeng.com/2016/12/04/distributed-systems/)
- [Distributed Unique ID Sequence Number Generator](https://www.callicoder.com/distributed-unique-id-sequence-number-generator/)
- [Multi-Processing Module](https://httpd.apache.org/docs/2.4/mod/prefork.html)
- [You can't have exactly-once delivery](https://bravenewgeek.com/you-cannot-have-exactly-once-delivery/)
- [Distributed Hash Tables: Architecture and Implementation](https://www.usenix.org/legacy/publications/library/proceedings/osdi2000/full_papers/gribble/gribble_html/node4.html)
- [Consistent Hashing](https://medium.com/@sent0hil/consistent-hashing-a-guide-go-implementation-fe3421ac3e8f)
- [Chord Presentation](https://www.slideshare.net/GertThijs/chord-presentation)
- [How sharding works](https://medium.com/@jeeyoungk/how-sharding-works-b4dec46b3f6)
- [RFC7230 - Message Syntax & Routing](https://tools.ietf.org/html/rfc7230#section-2.3)
- <https://github.com/donnemartin/system-design-primer>
- <https://www.cloudcomputingpatterns.org/>
- <https://docs.microsoft.com/en-us/azure/architecture/guide/>

Topics:
- Key Characteristics of Distributed Systems
- Load Balancing
- Caching
- Data Partitioning
- Indexes
- Proxies
- Redundancy and Replication
- SQL vs. NoSQL
- CAP Theorem
- Consistent Hashing
- Long-Polling vs WebSockets vs Server-Sent Events


## Distributed Computing

[Fallacies of Distributed Computing](https://en.wikipedia.org/wiki/Fallacies_of_distributed_computing):
1. The network is reliable
2. Latency is zero
3. Bandwidth is infinite
4. The network is secure
5. Topology doesn't change
6. There is one administrator
7. Transport cost is zero
8. The network is homogeneous


[`CAP theorem`](https://en.wikipedia.org/wiki/CAP_theorem): states that it is impossible for a distributed data store to simultaneously provide more than two out of the following three guarantees:
- Consistency
- Availability
- Partition Tolerance

[`ACID`](https://en.wikipedia.org/wiki/ACID_(computer_science)): set of properties of database transactions intended to guarantee validity even in the event of errors, power failures, etc
- Atomic
- Consistency
- Isolation
- Durability

`BASE`: Basically Available, Soft state, [Eventually consistency](https://en.wikipedia.org/wiki/Eventual_consistency)

`HA` = High Availability = No Downtime, Always available

`SPOF` = Single Point of Failure = If it fails, will stop the entire system from working

[Defining failure](https://blog.fosketts.net/2011/07/06/defining-failure-mttr-mttf-mtbf/)
- `RPO` = Recovery Point Objective = How much data can we loose
- `RTO` = Recovery Time Objective = How long it take to Recovery

`MTBF` = Mean-Time-Between-Failures = Time between failures

[Hystrix](https://github.com/Netflix/Hystrix): latency and fault tolerance library

[Data Deduplication](https://en.wikipedia.org/wiki/Data_deduplication): Technique for eliminating duplicate copies of repeating data

Types of delivery semantics:
- at-most-once
- at-least-once
- exactly-once

`CRDT` = [Conflit-free replicated data type](https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type)


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



## System Architect

[System-View-Model](https://en.wikipedia.org/wiki/View_model): View is a representation of a whole system from the perspective of a related set of concerns

### 4+1 Architectural View

- Logical view: is concerned with the functionality that the system provides to end-users.
- Development view: illustrates a system from a programmers perspective and is concerned with software management.
- Process view: deals with the dynamic aspect of the system, explains the system processes and how they communicate, and focuses on the runtime behavior of the system.
- Physical view: depicts the system from a system engineer's point of view. It is concerned with the topology of software components on the physical layer, as well as communication between these components.
- Use cases or scenarios are utilized to illustrate the architecture

### C4 Model

<https://c4model.com/>