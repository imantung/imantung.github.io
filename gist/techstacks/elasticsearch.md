---
layout: gist
title: Elasticsearch
---

https://github.com/elastic/elasticsearch


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


Check status
```sh
curl http://localhost:9200/
```
