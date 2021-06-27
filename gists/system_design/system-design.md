---
layout: gist
title: System Design
category: System Designs
---

# System Design

Ref
- [Distributed systems cheat sheet](http://dimafeng.com/2016/12/04/distributed-systems/)
- <https://github.com/donnemartin/system-design-primer>
- <https://www.cloudcomputingpatterns.org/>
- <https://docs.microsoft.com/en-us/azure/architecture/guide/>

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

## Availability & Reliability 


`Availability` = system can serve the request
- load balancing

High availability (HA) mean no downtime always available

`Reliability` = availability + working properly
- automated test

`Single point of failure` = if it fails, will stop the entire system from working

Metrics:
- Uptime
- Downtime
- [Failures](https://blog.fosketts.net/2011/07/06/defining-failure-mttr-mttf-mtbf/)
  - `RPO` = Recovery Point Objective = How much data can we loose
  - `RTO` = Recovery Time Objective = How long it take to Recovery
  - `MTBF` = Mean-Time-Between-Failures = Time between failures

## Durability & Resiliency

`Durability` refers to the on-going existence of the object or resource. Note that it does not mean you can access it, only that it continues to exist.
- By taking regular backups
- Storing resources in different geographical locations to sustain disasters.
- Performing checksums on data and repairing the corrupted data from backups.

`Resiliency` = self-heal
- Desing to identify faulty software or hardware and automate the repair/restart features or in case of beyond repair, just take it out of the working system.
- Active failover sites for applications and active replication to restore corrupted data.

## Redundancy and Replication

[Data Deduplication](https://en.wikipedia.org/wiki/Data_deduplication): Technique for eliminating duplicate copies of repeating data

`CRDT` = [Conflit-free replicated data type](https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type)

## Consistent Hashing
- [Distributed Hash Tables: Architecture and Implementation](https://www.usenix.org/legacy/publications/library/proceedings/osdi2000/full_papers/gribble/gribble_html/node4.html)
- [Consistent Hashing](https://medium.com/@sent0hil/consistent-hashing-a-guide-go-implementation-fe3421ac3e8f)
- [Chord Presentation](https://www.slideshare.net/GertThijs/chord-presentation)


## Message Queue / Pub-Sub

Ref:
- [You can't have exactly-once delivery](https://bravenewgeek.com/you-cannot-have-exactly-once-delivery/)

Types of delivery semantics:
- at-most-once
- at-least-once
- exactly-once
<!-- 
## Rate Limiter

On progress

## SQL vs. NoSQL

On progress
## Long-Polling vs WebSockets vs Server-Sent Events

On progress -->

## Partition & Sharding

- [How sharding works](https://medium.com/@jeeyoungk/how-sharding-works-b4dec46b3f6)

## Cache


Ref:
- [Guides by Google](https://developers.google.com/web/fundamentals/instant-and-offline/web-storage/cache-api?hl=en)
- [Guides by Fastly](https://www.fastly.com/blog/optimise-api-cache-improved-performance)
- [Guides by Heroku](https://devcenter.heroku.com/articles/increasing-application-performance-with-http-cache-headers)
- [Precondition HTTP Header](https://odino.org/don-t-hurt-http-if-none-match-the-412-http-status-code/)
- [RFC7234 - HTTP 1.1 Caching](https://tools.ietf.org/html/rfc7234)
- <https://blog.logrocket.com/caching-strategies-to-speed-up-your-api/>
- <https://codeahoy.com/2017/08/11/caching-strategies-and-how-to-choose-the-right-one/>
- <https://sookocheff.com/post/api/effective-caching/>


Solutions:
- [Varnish](https://varnish-cache.org/): caching HTTP reverse proxy


Strategies:
- Cache Aside
- Read/Write Through
- Write-around
- Write-back
- Refresh ahead


## API Gateway

- [RFC7230 - Message Syntax & Routing](https://tools.ietf.org/html/rfc7230#section-2.3)
  
## Clean architecture

- [The Clean Architecture from an Object-Oriented perspective](https://javadevguy.wordpress.com/2017/07/27/a-detailed-analysis-of-the-clean-architecture-from-an-object-oriented-perspective/)
- [Layers, Onions, Ports, Adapters: it's all the same](https://blog.ploeh.dk/2013/12/03/layers-onions-ports-adapters-its-all-the-same/)