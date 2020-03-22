---
layout: gist
title: Kubernetes
---

# Kubernetes

> "platform for automating deployment, scaling, and operations of application containers across clusters of hosts."

References:
- [k8s 101: pods, nodes, container, clusters](https://medium.com/google-cloud/kubernetes-101-pods-nodes-containers-and-clusters-c1509e409e16)
- [NodePort VS LoadBalancer vS Ingress](https://medium.com/google-cloud/kubernetes-nodeport-vs-loadbalancer-vs-ingress-when-should-i-use-what-922f010849e0)
- [The Illustrated Children's Guide to Kubernetes](https://www.youtube.com/watch?v=4ht22ReBjno)
- [Memory Request vs Memory Limit](https://jackiechen.org/2017/12/12/the-myth-of-memory-requests-and-limits-in-kubernetes/)

[Best practice for health check](https://cloud.google.com/blog/products/gcp/kubernetes-best-practices-setting-up-health-checks-with-readiness-and-liveness-probes)
- `readiness probe`: to know when to restart a Container
- `liveness probe`: to know when a Container is ready to start accepting traffic

[Debug Crashloopbackoff](https://sysdig.com/blog/debug-kubernetes-crashloopbackoff/)

### Tools/Utilities
- [Minikube](https://kubernetes.io/docs/setup/minikube/): local kubernetes
- [kubectx](https://github.com/ahmetb/kubectx): change context
- [stern](https://github.com/wercker/stern): tail logs from multi pods
- [Click](https://github.com/databricks/click): Command Line interactive
- [kops](https://github.com/kubernetes/kops): kubectl for clusters

## kubectl

Install
```sh
brew install kubectl 
```

Configuration
```sh
kubectl cluster-info # check the cluster info
kubectl config view # view config
```

Pod
```sh
kubectl get pod --all-namespaces
kubectl get pod -n default
kubectl get pod --all-namespaces --show-all -l "job-name=<job-name>" 

kubectl logs -f -n <namespace> <pod-name>
kubectl exec -it <pod-name> bash # it = interactive shell
kubectl port-forward <pod-name> 8080:8080

kubectl describe pod POD_NAME
kubectl got pod POD_NAME -o json
```

Deployment
```sh
kubectl get deploy --all-namespaces
kubectl get deploy -n <namespace> <deployment-name> -o yaml
```

Services
```sh
kubectl get svc --all-namespaces
```

Jobs
```sh
kubectl get job --all-namespaces
```

Copy
```sh
kubectl cp <file-spec-src> <file-spec-dest>
kubectl cp <file-spec-src> <file-spec-dest> -c <specific-container>

# Copy /tmp/foo local file to /tmp/bar in a remote pod in namespace
kubectl cp /tmp/foo <some-namespace>/<some-pod>:/tmp/bar 

# Copy /tmp/foo local file to /tmp/bar in a remote pod in namespace
kubectl cp <some-namespace>/<some-pod>:/tmp/foo /tmp/bar 
```

Check permission
```sh
kubectl auth can-i create deployments --namespace prod
```

## Helm 

The Package Manager for K8s
```sh
brew install kubernetes-helm
```

Cheatsheet
```sh
#  initialize the local CLI and also install Tiller 
helm init 

# update charts/ based on the contents of requirements.yaml
helm dependency update
helm dep update
```
