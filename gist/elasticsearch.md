---
layout: gist
title: Elasticsearch
---


Settings References:
- [A Heap of Trouble](https://www.elastic.co/blog/a-heap-of-trouble)
- [Cluster in Elasticsearch](https://www.elastic.co/guide/en/elasticsearch/reference/current/modules-node.html#coordinating-node)
- [Designing the perfect elasticsearch cluster](https://thoughts.t37.net/designing-the-perfect-elasticsearch-cluster-the-almost-definitive-guide-e614eabc1a87)
- [Heap Sizing](https://www.elastic.co/guide/en/elasticsearch/guide/current/heap-sizing.html)
- [Disabled Swapping](https://www.elastic.co/guide/en/elasticsearch/reference/6.2/setup-configuration-memory.html)
- [Zen Discovery](https://www.elastic.co/guide/en/elasticsearch/reference/current/modules-discovery-zen.html#unicast)
- [Important configuration change](https://www.elastic.co/guide/en/elasticsearch/guide/1.x/_important_configuration_changes.html)
- [G1GC and Elaticsearch](https://medium.com/naukri-engineering/garbage-collection-in-elasticsearch-and-the-g1gc-16b79a447181)

Monitoring References:
- [Metrics to watch](https://www.oreilly.com/ideas/10-elasticsearch-metrics-to-watch)


Tool:
- [A web frontend for an elastic search cluster](https://github.com/mobz/elasticsearch-head) (chrome plugin is available)


Split brain:
```
A “split-brain” situation is when communication between nodes in the cluster fails due to either a network failure or an internal failure with one of the nodes. In this kind of scenario, more than one node might believe it is the master node, leading to a state of data inconsistency.
```

Garbage Collector: 
- `-XX:+UseConcMarkSweepGC` if below 4G Heap
- `-XX:+UseG1GC` if over 4G Heap (but there is noted that it may caused some bug for 32bit machine)

Sharding Size: 
- From 0 to 4 million documents per index: 1 shard.
- From 4 to 5 million documents per index: 2 shards, so the index can still grow without causing too much problems in the future.
- With more than 5 millions documents, (number of documents / 5 million) + 1 shard.

`memory_lock` is not working in k8s

### Terminology

|MySQL|Elasticsearch|
|---|---|
|Database|Index|
|Table|Type|
|Row|Document|
|Column|Field|
|Schema|Mapping|
|Index|Everything is indexed|
|SQL|Query DSL|
|SELECT * FROM table|GET http://... |
|UPDATE table SET |PUT http://... |


### Nodes
- Master-eligible node `node.master: true`
  - responsible to cluster wide actions  
    - creating or deleting an index
    - tracking which nodes are part of the cluster
    - deciding which shards to allocate to which nodes
  - don't forget update `discovery.zen.minimum_master_nodes`
  - Master dedicated configuration:
    ```
    node.master: true 
    node.data: false 
    node.ingest: false 
    search.remote.connect: false
    ```
- Data node `node.data: true`
  - contain the documents
  - handle data related operations (CRUD, search and aggregation)
  - Data dedicated configuration: 
    ```
    node.master: false 
    node.data: true 
    node.ingest: false 
    search.remote.connect: false 
    ```
- Ingest node `node.ingest: true`
  - apply an ingest pipeline to a document in order to transform and enrich the document before indexing
  - Ingest dedicated configuration:
    ```
    node.master: false 
    node.data: false 
    node.ingest: true 
    search.remote.connect: false 
    ```
- Coordinating node `node.master: false` `node.data: false` `node.ingest: false`
  - forwards the request to data node
  - only route requests, handle the search reduce phase, and distribute bulk indexing
  - behave as smart load balancers.
  - Coordinating dedicated configuration: 
    ```
    node.master: false 
    node.data: false 
    node.ingest: false 
    search.remote.connect: false 
    ```

### Install

Install Homebrew
```sh
brew install elasticsearch

# config location
cat /usr/local/etc/elasticsearch/elasticsearch.yml

brew services start elasticsearch
```

Install with manual download
```sh
# download
curl https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-6.2.2.tar.gz
tar xvzf elasticsearch-6.2.2.tar.gz

# config
cat elasticsearch-6.2.2/config/elasticsearch.yml

# run
elasticsearch-6.2.2/bin/elasticsearch
```

### API

```
DELETE /_all

GET /[index]/_settings
POST /[index]/[type]/_search

GET /_nodes/stats?human&pretty
GET /_cluster/stats
```

### Plugins

- Elastic LTR ([Learning to Rank](https://elasticsearch-learning-to-rank.readthedocs.io/en/latest/)): train and use ranking models   
