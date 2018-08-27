---
layout: gist
title: FluentD
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

Fluent-gem
```sh
# install fluent-gem
gem install fluentd --no-ri --no-rdoc
fluentd --setup ./fluent

# start
fluentd -c ./fluent/fluent.conf -vv & # run in background and verbose
fluentd -c ./fluent/fluent.conf -p PROJECT_NAME/lib/fluent/plugin # run using PROJECT_NAME plugins

# stop
pkill -f fluentd
```

### Config

[Official Document](https://docs.fluentd.org/v1.0/articles/config-file#(1)-%E2%80%9Csource%E2%80%9D:-where-all-the-data-come-from)

Location 
```sh
# td-agent
sudo vi /etc/td-agent/td-agent.conf

# gem
sudo fluentd --setup /etc/fluent
sudo vi /etc/fluent/fluent.conf
```

Config: 
```xml
<source>
  @type tail
  tag "mylog"
  path /Users/imantung/mylog
  pos_file  /Users/imantung/mylog.pos
  
  <parse>
    @type none
  </parse>
</source>

<match barito>
  @type stdout
</match>
```

Config directive
1. `source`: where all the data come from
2. `match`: Tell fluentd what to do!
3. `filter`: Event processing pipeline
4. Set system wide configuration: the `system` directive
5. Group filter and output: the `label` directive
6. Re-use your config: the `@include` directive

Types of plugins
1. [Input](https://docs.fluentd.org/v0.12/articles/input-plugin-overview) in `source`
2. [Parser](https://docs.fluentd.org/v0.12/articles/parser-plugin-overview) in `source`
3. [Output](https://docs.fluentd.org/v0.12/articles/output-plugin-overview) in `match`
4. [Formatter](https://docs.fluentd.org/v0.12/articles/formatter-plugin-overview) in `match`
5. [Filter](https://docs.fluentd.org/v0.12/articles/filter-plugin-overview) in `filter`
6. [Buffer](https://docs.fluentd.org/v0.12/articles/buffer-plugin-overview) used by output plugins

### Input Plugins

- `in_tail` similar with `tail -F`
  ```
  <source>
    @type tail
    path /var/log/httpd-access.log
    pos_file /var/log/td-agent/httpd-access.log.pos
    tag apache.access
    format apache2
  </source>
  ```
- `in_forward`  listens to a TCP socket to receive the event stream or UDP socket to receive heartbeat. (assume only used within private network)
  ```
  <source>
    @type forward
    port 24224
    bind 0.0.0.0
  </source>
  ```
- `in_secure_forward` SSL with authentication
- `in_udp` accept UDP payload
- `in_tcp`accept TCP payload
- `in_http` accept HTTP payload
- `in_unix` retrieve records from the Unix Domain Socket
- `in_syslog` retrieve records via the syslog protocol on UDP or TCP
- `in_exec` executes external programs to receive or pull event logs
- `in_scribe` facebook scribe
- `in_multiprocess` use multiple CPU cores by spawning multiple child processes (able to handle very big transaction per day)
- `in_dummy` generate dummy event
  ```
  <source>
    @type dummy
    dummy {"hello":"world"}
  </source>
  ```
  
### Output Plugins

Non-buffered --> immediately
- `out_copy` copies events to multiple outputs
- `out_null` write nothing
- `out_roundrobin` distributes events to multiple outputs using a round-robin algorithm
- `out_stdout`

Buffered --> queued ([parameter](https://docs.fluentd.org/v0.12/articles/output-plugin-overview#buffered-output-parameters))
- `out_exec_filter` (1) executes an external program using an event as input and (2) reads a new event from the program output
- `out_forward` forwards events to other fluentd nodes
- `out_secure_forward` SSL with authentication
- `out_mongo` into mongo
- `out_mongo_replset` using mongo ReplicaSet
- `out_splunk` send data to a Splunk HTTP Event Collector 

Time Sliced --> queued with time as key ([parameters](https://docs.fluentd.org/v0.12/articles/output-plugin-overview#time-sliced-output-parameters))
- `out_exec` passes events to an external program.
- `out_file` into file
- `out_s3` into amazon s3
- `out_webhdfs` into HDFS


### Writing custom plugin

[Plugin Development](https://docs.fluentd.org/v0.12/articles/plugin-development)

Override method:
- `class SomeInput < Input`
    - `Fluent::Plugin.register_input('NAME', self)`
    - `def configure(conf)`
    - `def start`
    - `def shutdown`
- `class SomeOutput < BufferedOutput`
    - `Fluent::Plugin.register_output('NAME', self)`
    - `def configure(conf)`
    - `def start`
    - `def shutdown`
    - `def format(tag, time, record)`
    - `def write(chunk)`
- `class SomeOutput < Output`
    - `Fluent::Plugin.register_output('NAME', self)`
    - `def configure(conf)`
    - `def start`
    - `def shutdown`
    - `def emit(tag, es, chain)`
- `class PassThruFilter < Filter`
    - `Fluent::Plugin.register_filter('passthru', self)`
    - `def configure(conf)`
    - `def start`
    - `def shutdown`
    - `def filter(tag, time, record)`
