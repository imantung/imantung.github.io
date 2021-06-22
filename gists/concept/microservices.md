---
layout: gist
title: Microservices
category: System Design & Architecture
---

# Microservices

Ref:
- [SlideShare: Legacy is Good](https://www.slideshare.net/ubertobarbini/legacy-is-good)
- [microservices testing strategies](https://medium.freecodecamp.org/these-are-the-most-effective-microservice-testing-strategies-according-to-the-experts-6fb584f2edde)

API Gateway: Backend for front-end
- Kong
- Envoy
- Traefik
- NGINX
- HAProxy

### Service Mesh

- [Service mesh for microservices](https://medium.com/microservices-in-practice/service-mesh-for-microservices-2953109a3c9a)
- [Data Plane vs Control Plane](https://blog.envoyproxy.io/service-mesh-data-plane-vs-control-plane-2774e720f7fc):
- `DataPlane`/`SideCar Proxy`: Service Discovery, Health checking, routing, authentication/authorization, Observability
- `ControlPlane`: ui, scheduler, service discovery, sidecar proxy configuration


### Break down the monolithic

Good Read:
- [Google Migrating a monolithic to microservices](https://cloud.google.com/solutions/migrating-a-monolithic-app-to-microservices-gke)


Driving factors for decomposition:
- Team Boundaries
- Frequency of change
- Different responsible
- Different (cross-functional) requirements
- Different technical stack
- Prototyping/Experiments