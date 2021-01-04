---
layout: gist
title: DB Design
---

# Database Design

## Table creation

- Don’t share a primary key (even for a 1-to-1 relationship)
- The database only to store data
  - Don’t use on delete or on update cascade
  - Don’t use enum
  - Don’t use trigger or store procedure
- Make get data possible without join table (denormalization)
- Use the empty value to determine whether the column is set (don’t use null except you really mean it)

## Archiving

Reference: 
- <https://www.microfocus.com/media/flyer/top_four_data_retention_concerns_facing_records_managers_flyer.pdf>
- <https://www.freeitdata.com/5-steps-to-crafting-a-data-archiving-strategy/>

Concern:
1. Regulation Compliance
2. Litigation Preparation
3. Storage Management
4. Security