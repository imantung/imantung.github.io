---
layout: gist
title: fluentd
---

- Unified Logging with JSON
- reliable forwarding
- pluggable architecture

[Quick Start](https://docs.fluentd.org/v1.0/articles/quickstart)

Two way to setup fluentd:
- `td-agent`
- `fluent-gem`

[Download Page](https://www.fluentd.org/download)


Directories
```sh
# for macOs
/Library/LaunchDaemons/td-agent.plist

/etc/td-agent
/opt/td-agent
/var/log/td-agent
```

### Fluent-gem

```
#install
gem install fluentd --no-ri --no-rdoc

# run
fluentd --setup ./fluent
fluentd -c ./fluent/fluent.conf -vv &
echo '{"json":"message"}' | fluent-cat debug.test

#stop
pkill -f fluentd
```




# Config

[Official Document](https://docs.fluentd.org/v1.0/articles/config-file#(1)-%E2%80%9Csource%E2%80%9D:-where-all-the-data-come-from)

Location
```sh
# if install using td-agent
sudo vi /etc/td-agent/td-agent.conf

# if install using gem 
sudo fluentd --setup /etc/fluent
sudo vi /etc/fluent/fluent.conf
```

List of Directives
1. `source`: where all the data come from
2. `match`: Tell fluentd what to do!
3. `filter`: Event processing pipeline
4. Set system wide configuration: the `system` directive
5. Group filter and output: the `label` directive
6. Re-use your config: the `@include` directive
