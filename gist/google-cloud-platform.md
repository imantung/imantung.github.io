---
layout: gist
title: Google Cloud Platform
---

# Google Cloud Platform

### Pub-Sub

1. Is google pub sub guarantee ordering message? No
2. Is google pub sub guarantee  to be consume? Only guarantee 1 message per subscription
3. Guarantee subscription to subscripter? Yes
4. DLQ or fail-over support? Have feature called snapshots.
5. Max message size? 10 MB
6. Duplication? Some duplication may occurred. None in 1 year if you are lucky.
7. Data integrity? There is data watermark implement
8. Replication? Automatic handle by google 
9. Latency/How many average time takes from publisher to subscriber? Depend on region. Bit slower than Kafka. 
10. Check the article how spotify move from Kafka to PubSub

## Spanner 

1. Schema/query/migration must be changed
2. Recommended for something critical, high traffic need scalability like order/payment
3. Most case is game industry because need to expand to many country

