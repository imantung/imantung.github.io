---
layout: gist
title: Distributed Computing
---

# Distributed Computing

Ref
- [Distributed systems cheat sheet](http://dimafeng.com/2016/12/04/distributed-systems/)
- [Distributed Unique ID Sequence Number Generator](https://www.callicoder.com/distributed-unique-id-sequence-number-generator/)
- [Multi-Processing Module](https://httpd.apache.org/docs/2.4/mod/prefork.html)
- [Sticky vs Non Sticky Session](https://stackoverflow.com/questions/10494431/sticky-and-non-sticky-sessions)
- [You can't have exactly-once delivery](https://bravenewgeek.com/you-cannot-have-exactly-once-delivery/)
- [Distributed Hash Tables: Architecture and Implementation](https://www.usenix.org/legacy/publications/library/proceedings/osdi2000/full_papers/gribble/gribble_html/node4.html)
- [Consistent Hashing](https://medium.com/@sent0hil/consistent-hashing-a-guide-go-implementation-fe3421ac3e8f)
- [Chord Presentation](https://www.slideshare.net/GertThijs/chord-presentation)
- [How sharding works](https://medium.com/@jeeyoungk/how-sharding-works-b4dec46b3f6)

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


