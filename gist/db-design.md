---
layout: gist
title: DB Design
---

# Database Design

Ref:
- https://www.slideshare.net/citus_data/data-modeling-normalization-and-denormalisation-postgresql-conference-europe-2018-dimitri-fontaine

Quotes:
- "Normalize until it hurts; denormalize until it works"

## Data Anomaly

- Update Anomalies
- Insertion Anomalies
- Deletion Anomalies

## Normalization

1NF: 
- no duplicated rows 
- each cell is single-valued (no repeating group or arrays)
- entries in a column (field) are the same kind

2NF:
- no partial functional dependency

3NF: 
- no partial transitive dependency (A -> B, B -> C, C is transitive depend to A)

## Denormalization


## Table creation (Opinion)

- Don’t share a primary key (even for a 1-to-1 relationship)
- The database only to store data
  - Don’t use on delete or on update cascade
  - Don’t use enum
  - Don’t use trigger or store procedure
- Make get data possible without join table (denormalization)
- Use the empty value to determine whether the column is set (don’t use null except you really mean it)