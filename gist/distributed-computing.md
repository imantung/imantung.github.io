---
layout: gist
title: Distributed Computing
---

Ref
- [Distributed Unique ID Sequence Number Generator](https://www.callicoder.com/distributed-unique-id-sequence-number-generator/)
- [Multi-Processing Module](https://httpd.apache.org/docs/2.4/mod/prefork.html)
- [Sticky vs Non Sticky Session](https://stackoverflow.com/questions/10494431/sticky-and-non-sticky-sessions)

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

HAProxy


