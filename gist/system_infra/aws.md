---
layout: gist
title: AWS
category: system_infra
---

# AWS

`AWS` = Amazon Web Service

`EC2` = Elastic Compute Cloud
  - web-based service that allows businesses to run application programs in the Amazon Web Services (AWS) public cloud
  - allows a developer to spin up virtual machines (VM)
  - EC2 Instance = Virtual Server

`AMI` = Amazon Machine Image
  - master image for the creation of virtual servers


`S3` = Amazon Simple Storage Service
  - scalable, high-speed, low-cost, web-based cloud storage service designed for online backup and archiving of data and application programs
  - an object storage service
  - stored as a file
  - rest API
  - up to 5 GB per object.
  - S3 Standard -> low latency and high throughput
  - S3 Infrequent Access -> cheaper; for long-term data storage (backup)

`EBS` = Amazon Elastic Block Store
  - best used for storing persistent data

`EFS` = Amazon Elastic File System

`RDS` = Amazon Relational Database Service

`VPC` = Amazon Virtual Private Cloud

`IAM` = Amazon Identity and Access Management


### EC2 Type

References:
- [Complete EC2 Type List](https://aws.amazon.com/ec2/instance-types/)
- [Userguide](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html)

Categories by purpose:
1. General Purpose (`t*`, `m*`)
  - balance of compute/memory/network capibility
  - low-traffic website
  - `t*` -> burstable performance
  - `m*` -> fixed performance
2. Compute Optimized (`c*`)
  - higher ratio of vCPU to memory
  - best price for vCPU
3. Memory Optimized (`x*`,`r*`)
  - best price for memory
  - `x*` > `r*`
4. Accelerated Optimized (`g*`,`p*`)
  - powered with high-performance GPU
  - `p*` > `g*`
5. Storage Optimized (`i*`,`d*`,`h*`)
  - best price for storage
  - `i*` -> SSD
  - `d*`,`h*` -> HDD

Burstable Performance Instances (e.g. `t2`)
  - instance have baseline level of CPU performance
  - ability to burst above baseline level
  - burst based on CPU credits
  - 1 CPU credits = 1 minutes CPU performance
  - [CPU credit/baseline level list](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/t2-credits-baseline-concepts.html)
