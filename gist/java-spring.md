---
layout: gist
title: Java Spring
---

# Java Spring


## Spring Kafka

Listen from specific offset regardless offset reset policy. Combine with `enable.auto.commit=false` for consumer without group
```java
public class KafkaMessageListener extends AbstractConsumerSeekAware  {
    @KafkaListener(topics = "your.topic")
    public void listen(byte[] payload) {
        // ...
    }

    @Override
    public void onPartitionsAssigned(Map<TopicPartition, Long> assignments, ConsumerSeekCallback callback) {
        assignments.forEach((t, o) -> callback.seekToEnd(t.topic(), t.partition()));

        // from beginning
        // assignments.forEach((t, o) -> callback.seekToBeginning(t.topic(), t.partition())); 
    }
}
```

## Mock

- https://dzone.com/articles/spring-boot-unit-testing-and-mocking-with-mockito

For junit5, using `@ExtendWith` instead of `@RunWith`
```java
package com.in28minutes.mockito.mockitodemo;

import static org.junit.assert.assertequals;
import static org.mockito.mockito.when;

import org.junit.test;
import org.junit.runner.runwith;
import org.mockito.injectmocks;
import org.mockito.mock;
import org.mockito.junit.mockitojunitrunner;

@RunWith(mockitojunitrunner.class)
public class somebusinessmockannotationstest {

    @Mock
    dataservice dataservicemock;

    @InjectMocks
    somebusinessimpl businessimpl;

    @Test
    public void testfindthegreatestfromalldata() {
        when(dataservicemock.retrievealldata()).thenreturn(new int[] {24,15,3});
        assertequals(24, businessimpl.findthegreatestfromalldata());
    }

    @Test
    public void testfindthegreatestfromalldata_foronevalue() {
        when(dataservicemock.retrievealldata()).thenreturn(new int[] { 15});
        assertequals(15, businessimpl.findthegreatestfromalldata());
    }

    @Test
    public void testfindthegreatestfromalldata_novalues() {
        when(dataservicemock.retrievealldata()).thenreturn(new int[] {});
        assertequals(integer.min_value, businessimpl.findthegreatestfromalldata());
    }
}
```


## Cacheable

Ref:
- https://grizzlysoftware.pl/spring-boot-cache-with-redis/