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
