---
layout: gist
title: Influx
category: Tech Stacks
---

# Influx

[TICK Platform: Time-series platform](https://www.influxdata.com/time-series-platform/)
- `Telegraf`: The agent for collecting and reporting metrics and event
- `InfluxDB`: The database
- `Cronograf`: UI/Control Panel
- `Kapasitor`: Real-time streaming data processing engine and alerting

## InfluxDB

Get Started:
```bash
# install 
brew install influxdb 

# configuration
# https://docs.influxdata.com/influxdb/v1.7/administration/config/
influxd config > /usr/local/etc/influxdb.conf

# start
brew services start influxdb

# check
influx -version
```

References:
- [Query Language](https://docs.influxdata.com/influxdb/v1.7/query_language/)
- [Write Protocols](https://docs.influxdata.com/influxdb/v1.7/write_protocols/)

[Glossary](https://docs.influxdata.com/influxdb/v1.7/concepts/glossary/):
- `Database`: Like database in SQL
- `Series`: collection of data; 
- `Measurement`: Like table in SQL
- `Field Set`: Data point
- `Tag Set`: record metadata (Optional)


[Shell Command](https://docs.influxdata.com/influxdb/v1.7/tools/shell/)
```bash
# execute
influx -execute 'SHOW DATABASES'
influx -execute 'SELECT * FROM "h2o_feet" LIMIT 3' -database="NOAA_water_database" -precision=rfc3339

# format
influx -format=column
influx -format=csv
influx -format=json
influx -format=json -pretty
```

[Schema Exploration](https://docs.influxdata.com/influxdb/v1.7/query_language/schema_exploration/)
```
SHOW DATABASES

USE <database_name>

SHOW RETENTION POLICIES
SHOW RETENTION POLICIES ON NOAA_water_database

SHOW SERIES
SHOW SERIES ON NOAA_water_database FROM "h2o_quality" WHERE "location" = 'coyote_creek' LIMIT 2

SHOW FIELD KEYS
SHOW FIELD KEYS ON "NOAA_water_database" FROM "h2o_feet"
```

[Data Explaration](https://docs.influxdata.com/influxdb/v1.7/query_language/data_exploration/)
```
SELECT * FROM "h2o_feet"
SELECT "level description","location","water_level" FROM "h2o_feet"
SELECT "level description"::field,"location"::tag,"water_level"::field FROM "h2o_feet"
SELECT *::field FROM "h2o_feet"
SELECT MEAN("water_level") FROM "h2o_feet" GROUP BY "location"
```

[Write](https://docs.influxdata.com/influxdb/v1.7/write_protocols/line_protocol_reference/)
```
INSERT mymeas value=true
INSERT mymeas value="true"
INSERT mymeas value=3 1465934559000000000
INSERT mymeas value=3 1465934559000000000
INSERT mymeas value="stringing along" 1466625759000000000
```

## Telegraf

```bash
# install
brew install telegraf

# configuration
telegraf --input-filter cpu:mem:system --output-filter influxdb config > /usr/local/etc/telegraf.conf

# start
brew services start telegraf
```

## Cronograf

```bash
# install
brew install chronograf

# start
brew services start chronograf
```

## Kapasitor

```bash
# install
brew install kapacitor

# configuration
kapacitord config > /usr/local/etc/kapacitor.conf

# start
brew services start kapacitor
```