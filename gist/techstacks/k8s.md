---
layout: gist
title: Kubernets
---

An container-orchestration

Gimmick: "platform for automating deployment, scaling, and operations of application containers across clusters of hosts."

`kubectl` : the cli tool

Others tool:
- [kubectx](https://github.com/ahmetb/kubectx)
- [stern](https://github.com/wercker/stern)
- [kube-fzf](https://github.com/arunvelsriram/kube-fzf)

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
