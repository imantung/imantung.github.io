---
layout: gist
title: Kafka
---

# Kafka

- [How to choose partition number](https://www.confluent.io/blog/how-to-choose-the-number-of-topicspartitions-in-a-kafka-cluster/)
- [Replication Tool](https://cwiki.apache.org/confluence/display/KAFKA/Replication+tools)
- [Kafka Authorizer](https://cwiki.apache.org/confluence/display/KAFKA/Kafka+Authorization+Command+Line+Interface)
- [Don't use consumer groups the wrong ways](https://dzone.com/articles/dont-use-apache-kafka-consumer-groups-the-wrong-wa)

PubSub VS Message Queue
- Message Queue = Same consumer group = Competing Consumer pattern
- PubSub = Different consumer group = Publish Subscribe pattern

### Lag

`ISR` = In Sync Replication

Kafka Consumer Lag = Latest Offset - Consumer Offset

[Burrow](https://github.com/linkedin/Burrow): Kafka Consumer Lag Checking


### Commands

Get kafka PID
```bash
ps ax | grep -i 'kafka' | grep java | grep -v grep | grep -v zookeeper | awk '{print $1}'
```

Remove all data on topics
```bash
rm -rf /tmp/kafka-logs/newTopic-*
```

Create topic
```bash
bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic test
```

Delete topic
```bash
bin/kafka-topics.sh --delete --zookeeper localhost:2181 --topic test
```

List of topics
```bash
bin/kafka-topics.sh --list --zookeeper localhost:2181
```



### Server Properties

Allowed kafka to be access from outside
```properties
advertised.host.name=0.0.0.0
```

Get error `dial tcp: lookup YOUR_NETWORK_NAME: no such host` if consumer service using `localhost` or `127.0.0.1` as host. 
```properties
listeners=PLAINTEXT://:9092 
``` 

Allow to delete topic
```properties
delete.topic.enable=true
```


### Kafka Manager

Install 
```bash
git clone https://github.com/yahoo/kafka-manager.git
cd kafka-manager
./sbt clean dist
```


[ActorModel.scala](https://github.com/yahoo/kafka-manager/blob/5edd5e96ac4a8a3701b8e01922e256c052ce3f29/app/kafka/manager/model/ActorModel.scala#L416-L420)

`Brokers Skewed` = number of partitions > avg partitions per broker (on the given topic).
  e.g: 2 brokers share 4 partitions, if one of them has 3 partitions, it is skewed (3 > 2)

`Brokers Spread` = percentage of brokers in the cluster that has partitions for the given topic.
e.g. 3 brokers share a topic that has 2 partitions, so 66% of the brokers have partitions for this topic
