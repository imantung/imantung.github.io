---
layout: gist
title: Postgres
---

# Postgres

stolon

stream replication

[Gist](https://gist.github.com/rgreenjr/3637525)

Postgres does not automatically return the last insert id, because it would be wrong to assume you're always using a sequence. You need to use the RETURNING keyword in your insert to get this information from postgres.
```sql
INSERT INTO user (name) VALUES ('John') RETURNING id
```


### PSQL

Connect
```sh
psql -d DATABASE
psql -d postgres

# template1 is a database created by postgres itself, and is present on all installations
psql -d template1

psql -h public-ip-server -p 5432 -U postgres

PGPASSWORD=password psql -h 0.0.0.0 -p 5432 -U user
```

Psql command
```
\l            #list
\c DATABASE   # connect db
\dt           # show table
\d+           # show table + indices
```


#### Configuration

```sql
SHOW all;
SHOW config_file;

SET configuration_parameter TO DEFAULT;
```

```sql
SELECT * FROM pg_settings;
UPDATE pg_settings SET setting = reset_val WHERE name = 'configuration_parameter';
```


### Query

Create DB
```sql
CREATE DATABASE [name]
```

Get columns through query
```sql
SELECT *
FROM information_schema.columns
WHERE table_schema = 'your_schema'
  AND table_name   = 'your_table'
```

Json
```sql
SELECT * FROM table_name
WHERE json_field @> '[{"field":"value"}]'
```

### Replication

Check replication status
```sql
SELECT client_addr, state, sent_location, write_location, flush_location, replay_location
FROM pg_stat_replication;
```

Check replication delay
```sql
select now() - pg_last_xact_replay_timestamp() AS replication_delay;
```

Replication script (run on slave)
```sh
#!/bin/bash

MASTER_DB_IP=$1

[[ -z "${MASTER_DB_IP}" ]] &&
echo "[error] parameters are missing
Eg: ./replication.sh <master_db_ip>" && exit 123

sudo service postgresql stop
sudo cp /var/lib/postgresql/9.5/main/recovery.conf /tmp
sudo -u postgres rm -rf /var/lib/postgresql/9.5/main
sudo -u postgres pg_basebackup -h $MASTER_DB_IP -D /var/lib/postgresql/9.5/main -U rep -v -P
sudo mv /tmp/recovery.conf /var/lib/postgresql/9.5/main/
sudo chown postgres:postgres /var/lib/postgresql/9.5/main/recovery.conf
sudo service postgresql start
```

### Extensions

[list of PostgreSQL extensions officially supported here](https://www.postgresql.org/docs/current/static/contrib.html)
[find 3rd party extensions](https://pgxn.org/)

```sql
-- list of installed extension
SELECT * FROM pg_extension

-- create
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- drop
DELETE EXTENSION IF EXISTS "uuid-ossp";
```

### Docker Compose 

```yaml
version: '3.5'

services:
  postgres:
    container_name: postgres_container
    image: postgres
    environment:
      POSTGRES_USER: ${POSTGRES_USER:-postgres}
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD:-changeme}
      PGDATA: /data/postgres
    volumes:
       - postgres:/data/postgres
    ports:
      - "5432:5432"
    networks:
      - postgres
    restart: unless-stopped

networks:
  postgres:
    driver: bridge

volumes:
  postgres:
```

