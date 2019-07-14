---
layout: gist
title: Docker
---

- Automates the deployment as container
- Linux-only tool
- Developed in the Go language
- Builds on LinuX Containers (LxC)  --> latest version not use LxC anymore
- create Virtual Environments (VE)
- <https://www.docker.com/>


### Quotes

> Develop, Ship and Run Any Application Anywhere

### Get Started

- [Install docker dmg (doesn’t need VM)](https://docs.docker.com/docker-for-mac/install/) --> recommended
- [Install docker toolbox (need VM)](https://docs.docker.com/toolbox/toolbox_install_mac/) --> legacy desktop solution
- [Different between docker dmg and toolbox](https://docs.docker.com/docker-for-mac/docker-toolbox/)
- [(Alternative) Install docker via homebrew (xhyve)](https://pilsniak.com/how-to-install-docker-on-mac-os-using-brew/) --> never tried it
- [(Alternative) Install docker via homebrew (boot2docker)](https://penandpants.com/2014/03/09/docker-via-homebrew/) --> never tried it
- [Quick start](https://docs.docker.com/docker-for-mac/)
- [Quick start on golang](https://blog.golang.org/docker)

Quick start cheatsheet:
```sh
docker version
docker info
docker run -d -p 80:80 --name webserver nginx
docker ps
docker stop webserver
docker ps -a
docker help ps
docker start webserver
docker rm -f webserver
docker images
docker rmi nginx
```

### Image & Container

Image is basis of container.
```sh
# list of image
docker images
docker image ls
```

Container is instance of image. The apps is running on top of container
```sh
# run new container
docker run -d -p 80:80 --name [container] [image]

# list of container
docker container ls
docker ps

# show all including stop container
docker ps -a

# list with filter
docker ps -aq -f status=exited

# remove Container
docker rm [container]

# remove stopped containers
docker ps -aq --no-trunc | xargs docker rm

# remove containers after
docker ps --since a1bz3768ez7g -q | xargs docker rm

# remove container before
docker ps --before a1bz3768ez7g -q | xargs docker rm

# remove dangling/untagged images
docker ps -aq --no-trunc -f status=exited | xargs docker rm  
```

Dockerfile is source code of the images on.
```sh
# build image
docker build [directory contains Dockerfile]

# remove image
docker rmi [image name]
```
