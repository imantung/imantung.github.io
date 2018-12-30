---
layout: gist
title: Distributed Computing
---

<!-- FIXME -->

[CAP theorem](https://en.wikipedia.org/wiki/CAP_theorem): states that it is impossible for a distributed data store to simultaneously provide more than two out of the following three guarantees: 
- Consistency
- Availability
- Partition Tolerance

[ACID Properties](https://en.wikipedia.org/wiki/ACID_(computer_science)): set of properties of database transactions intended to guarantee validity even in the event of errors, power failures, etc
- Atomic
- Consistency
- Isolation
- Durability

BASE: Basically Available, Soft state, [Eventually consistency](https://en.wikipedia.org/wiki/Eventual_consistency)

High Availability (HA) = No Downtime, Always available

Single Point of Failure (SPOF) = If it fails, will stop the entire system from working

[Defining failure](https://blog.fosketts.net/2011/07/06/defining-failure-mttr-mttf-mtbf/)
- Recovery Point Objective (RPO) = How much data can we loose
- Recovery Time Objective (RTO) = How long it take to Recovery

Mean-Time-Between-Failures (MTBF) = Time between failures

Kong

Envoy

HAProxy
