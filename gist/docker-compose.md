---
layout: gist
title: Docker Compose
---

Reference:
- [GoDoRP docker compose for development and production](https://medium.com/@McMenemy/godorp-docker-compose-for-development-and-production-e37fe0a58d61)
- [DataDog Example](https://github.com/DataDog/docker-compose-example)


Install 
```bash
brew install docker-compose
```

Cheatsheet
```bash
docker-compose ps # list of process

docker-compose start # start the service
docker-compose stop # stop the service 
docker-compose pause
docker-compose unpause

docker-compose up # Create and start containers
docker-compose down # Stop and remove containers, networks, images, and volumes
```

### Example

Postgres
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

Redis
```yaml
version: '3'

services:
  redis:
    image: redis:4.0.5-alpine
    command: redis-server --requirepass "${REDIS_PASSOWORD:-redispass}"
    hostname: redis
    ports:
      - "6379:6379"
    networks:
      - redis
    volumes:
      - redis:/data

networks:
  redis:

volumes:
  redis:
```

