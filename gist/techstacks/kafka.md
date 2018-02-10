---
layout: gist
title: Kafka
---

[How to choose partition number](https://www.confluent.io/blog/how-to-choose-the-number-of-topicspartitions-in-a-kafka-cluster/)

[Replication Tool](https://cwiki.apache.org/confluence/display/KAFKA/Replication+tools)

ISR = In Sync Replication

### Kafka Manager

```sh
git clone https://github.com/yahoo/kafka-manager.git
cd kafka-manager
./sbt clean dist
```


[ActorModel.scala](https://github.com/yahoo/kafka-manager/blob/5edd5e96ac4a8a3701b8e01922e256c052ce3f29/app/kafka/manager/model/ActorModel.scala#L416-L420)

`Brokers Skewed` = number of partitions > avg partitions per broker (on the given topic).
  e.g: 2 brokers share 4 partitions, if one of them has 3 partitions, it is skewed (3 > 2)

`Brokers Spread` = percentage of brokers in the cluster that has partitions for the given topic.
e.g. 3 brokers share a topic that has 2 partitions, so 66% of the brokers have partitions for this topic
