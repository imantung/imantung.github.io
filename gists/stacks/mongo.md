---
layout: gist
title: Mongo
category: Tech Stacks
---

# Mongo

- <https://dzone.com/articles/why-mongodb>
- <https://www.sysleaf.com/command-mongodb/>

[SQL Comparison](https://docs.mongodb.com/manual/reference/sql-comparison/)

|SQL Term|MongoDB Term|
|---|---|
|Database|Dtabase|
|Table|Collections|
|Row|Document or BSON|
|Column|Field|
|index|index|
|table joins|$lookup, embedded documents|
|primary key|`_id` field|
|aggregation|aggregation pipeline ([SQL Aggregation Mapping Char](https://docs.mongodb.com/manual/reference/sql-aggregation-comparison/))|
|SELECT INTO NEW_TABLE|`$out`|
|MERGE INTO TABLE|`$merge`|
|transaction|transaction|


[Shell Cheatsheet](https://docs.mongodb.com/manual/mongo/)
```bash
mongo --host mongodb0.example.com --port 28015
```

REPL Cheatsheet
```
use DATABASE_NAME
show dbs
db.createUser({user:"mongouser",pwd:"mongopass",roles:[{role:"readWrite",db:"mongodb"}]})
db.auth({user:"mongouser",pwd:"mongopass",digestPassword: true})
```

Query Cheatsheet
```
db.test.find().limit(10)
db.test.find(ObjectId('4ecc05e55dd98a436ddcc47c'))
```

## Export

```bash
mongoexport \
    --username dev_iman_tunggono \
    --password S8xmMu6RICJv7aQR \
    --host 10.145.129.236 \
    --db hotel_content_b2b \
    --collection hotel \
    --type=json \
    --fields='column1,column2,column2' \
    --query='{}' \
    -o output.json
```

