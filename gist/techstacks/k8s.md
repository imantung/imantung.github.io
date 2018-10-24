---
layout: gist
title: Kubernets
---

An container-orchestration

Gimmick: "platform for automating deployment, scaling, and operations of application containers across clusters of hosts."

Tools/Utilities:
- [kubectx](https://github.com/ahmetb/kubectx): change context
- [stern](https://github.com/wercker/stern): tail logs from multi pods
- [kube-fzf](https://github.com/arunvelsriram/kube-fzf) command-line fuzzy searching of Kubernetes Pods
- [codefresh](https://codefresh.io/) Continuous Delivery Platform for k8s
- [stevedore](https://github.com/codefresh-io/Stevedore) Create clusters in Codefresh


[Memory Request vs Memory Limit](https://jackiechen.org/2017/12/12/the-myth-of-memory-requests-and-limits-in-kubernetes/)

[Deployment vs StatefulSets](https://stackoverflow.com/questions/41583672/kubernetes-deployments-vs-statefulsets)

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

[Debug Crashloopbackoff](https://sysdig.com/blog/debug-kubernetes-crashloopbackoff/)

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
