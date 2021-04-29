---
layout: gist
title: Docker
---

# Docker

### Get Started

- [Install docker dmg (doesn’t need VM)](https://docs.docker.com/docker-for-mac/install/) --> recommended
- [Install docker toolbox (need VM)](https://docs.docker.com/toolbox/toolbox_install_mac/) --> legacy desktop solution
- [Different between docker dmg and toolbox](https://docs.docker.com/docker-for-mac/docker-toolbox/)
- [(Alternative) Install docker via homebrew (xhyve)](https://pilsniak.com/how-to-install-docker-on-mac-os-using-brew/) --> never tried it
- [(Alternative) Install docker via homebrew (boot2docker)](https://penandpants.com/2014/03/09/docker-via-homebrew/) --> never tried it
- [Quick start](https://docs.docker.com/docker-for-mac/)
- [Quick start on golang](https://blog.golang.org/docker)


### Cheatsheet

clear containers
```bash
docker rm -f $(docker ps -a -q)
```
clear images
```bash
docker rmi -f $(docker images -a -q)
```

clear volumes
```bash
docker volume rm $(docker volume ls -q) 
```

clean networks
```bash
docker network rm $(docker network ls | tail -n+2 | awk '{if($2 !~ /bridge|none|host/){ print $1 }}')
```

remove dangling/untagged images
```bash
docker ps -aq --no-trunc -f status=exited | xargs docker rm  
```


## Docker Compose

Reference:
- [GoDoRP docker compose for development and production](https://medium.com/@McMenemy/godorp-docker-compose-for-development-and-production-e37fe0a58d61)
- [DataDog Example](https://github.com/DataDog/docker-compose-example)

