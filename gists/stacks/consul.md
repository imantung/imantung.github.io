---
layout: gist
title: Consul
category: Tech Stack & Tool
---

# Consul

- Service Discovery
- Health Checking (for Failure Detection)
- KV Store
- Multi Datacenter

### Agent

- Register services
- Run health checks
- Forwards queries to servers

Checks
```bash
curl localhost:8500/v1/catalog/nodes
```

Open the UI `localhost:8500/ui`


### Misc

sample response from catalog services
```js
{
    "ID": "40e4a748-2192-161a-0510-9bf59fe950b5",
    "Node": "foobar",
    "Address": "192.168.10.10",
    "Datacenter": "dc1",
    "TaggedAddresses": {
      "lan": "192.168.10.10",
      "wan": "10.0.10.10"
    },
    "NodeMeta": {
      "somekey": "somevalue"
    },
    "CreateIndex": 51,
    "ModifyIndex": 51,
    "ServiceAddress": "172.17.0.3",
    "ServiceEnableTagOverride": false,
    "ServiceID": "32a2a47f7992:nodea:5000",
    "ServiceName": "foobar",
    "ServicePort": 5000,
    "ServiceMeta": {
        "foobar_meta_value": "baz"
    },
    "ServiceTags": [
      "tacos"
    ]
  }
]
```
