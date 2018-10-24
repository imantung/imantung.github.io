---
layout: gist
title: Elasticsearch
---

[Repo](https://github.com/elastic/elasticsearch)

[A web frontend for an elastic search cluster](https://github.com/mobz/elasticsearch-head) (chrome plugin is available)

[A Heap of Trouble](https://www.elastic.co/blog/a-heap-of-trouble)

[Cluster in Elasticsearch](https://www.elastic.co/guide/en/elasticsearch/reference/current/modules-node.html#coordinating-node)


---

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

### Overview

Terminology

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

### API

Check status
```sh
curl http://localhost:9200/
```

Delete All
```sh
curl -X DELETE 'http://localhost:9200/_all'
```

### Plugins

Elastic LTR ([Learning to Rank](https://elasticsearch-learning-to-rank.readthedocs.io/en/latest/)): train and use ranking models   
