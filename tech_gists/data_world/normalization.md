---
layout: tech_gist
title: Normalization
category: Data World
---

# Normalization

> Normalize until it hurts; denormalize until it works

Ref:
- <https://www.slideshare.net/citus_data/data-modeling-normalization-and-denormalisation-postgresql-conference-europe-2018-dimitri-fontaine>




Data Anomaly:
- Update Anomalies
- Insertion Anomalies
- Deletion Anomalies



1NF: 
- no duplicated rows 
- each cell is single-valued (no repeating group or arrays)
- entries in a column (field) are the same kind

2NF:
- no partial functional dependency

3NF: 
- no partial transitive dependency (A -> B, B -> C, C is transitive depend to A)

