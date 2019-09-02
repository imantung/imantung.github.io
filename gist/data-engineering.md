---
layout: gist
title: Data Engineering
---

Good Reading:
- [The world beyond batch streaming](https://www.oreilly.com/ideas/the-world-beyond-batch-streaming-101)
- [Data Janitor 101](https://www.slideshare.net/soobrosa/data-janitor-101)
- [How to become a data engineer](https://towardsdatascience.com/who-is-a-data-engineer-how-to-become-a-data-engineer-1167ddc12811)
- [5 things you should know about big data](https://www.varonis.com/blog/5-things-you-should-know-about-big-data/)


Tool:
- [Metabase](https://www.metabase.com/)
- [Airflow](https://airflow.apache.org/):
- [Debezium])(https://debezium.io/): Stream changes from your database
- [Apache Nifi](https://nifi.apache.org/)

<https://github.com/datasciencemasters>

## Stream Processing

1. Simple Event Processing  
Simple filter (e.g. is this gold or platinum customer)
2. Event Stream Processing  
Looking across multiple event streams and joining multiple event, etc
3. Complex Event Processing  
Processing multiple event stream to identify meaningful pattern, using complex condition & temporal windows  
e.g . There has been a more than 10% increase in overall trading activity and the average price of commodities has fallen 2% in last 4 hour


## Data Integrity

Ref:
- <https://en.wikipedia.org/wiki/Data_integrity>
- <https://database.guide/what-is-data-integrity/>

Data Integrity is the assurance that data a consistent, accurate, reliable and accessible.

"Guilty until proven innocent" approach


Types of integrity constraint:
1. Entity integrity: within table (primary key)
2. Referential integrity: inter table relationship (foreign key)
3. Domain integrity
4. User-defined integrity