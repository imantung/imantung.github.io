---
layout: gist
title: Performance Test
category: Testing & Agile methodology
---

# Performance Test

Ref:
- [Ultimate guide performace testing](https://stackify.com/ultimate-guide-performance-testing-and-software-testing/)

Tool:
- [Apache Benchmark](https://httpd.apache.org/docs/2.4/programs/ab.html)
- [Vegeta](https://github.com/tsenart/vegeta)
- [Artillery](https://artillery.io/)
- [k6](https://k6.io/)


Type of performance test: 
- Load Testing: increase workload 
- Volume Testing/Flood Test: increate amounts of data 
- Stress Testing/Fatigue Testing: outside of the parameters of normal working conditions
- Spike Testing: type of stress testing; workload is beyond normal expectations for short amounts of time
- Endurance Testing/Soak Testing: Check for resource leak
- Scalibility Testing: gradually adding to the workload or data volume 

Observation:
- Bottlenecking
- Poor scalability
- Configuration issue
- Insufficient hardware resource

Metrics:
- `Response Time`
- `Wait Time` (latency)
- `Average Load Time`
- `Throughput`: usually kilobyte per second
- `Concurrent User`
- `Request per second`
- `Transaction passed/failed`
- `Error Rate`
- `CPU Utilization`: high cpu usage mean machine working more its capacity 
- `Memory utilization`