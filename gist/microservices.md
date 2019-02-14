---
layout: gist
title: Microservices
---

[Service mesh for microservices](https://medium.com/microservices-in-practice/service-mesh-for-microservices-2953109a3c9a)

[Data Plane vs Control Plane](https://blog.envoyproxy.io/service-mesh-data-plane-vs-control-plane-2774e720f7fc):
- `DataPlane`/`SideCar Proxy`: Service Discovery, Health checking, routing, authentication/authorization, Observability
- `ControlPlane`: ui, scheduler, service discovery, sidecar proxy configuration

[Flagr](https://github.com/checkr/flagr): a feature flagging, A/B testing and dynamic configuration microservice 

API Gateway: Backend for front-end
- Kong
- Envoy
- Traefik
- NGINX
- HAProxy
