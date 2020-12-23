---
layout: gist
title: Vagrant
---

# Vagrant

- configuration and provisioning tool using which you can create VMs or container
- a mechanism to reproduce environments
- needs provider which is VirtualBox/VMware/Docker

https://www.vagrantup.com/

### Quotes

> Development Environments Made Easy

### Get Started

```bash
# create some folder
mkdir vagrant_getting_started
cd vagrant_getting_started
vagrant init
vim Vagrantfile # edit config; change config.vm.box = "hashicorp/precise64"
vagrant up
```


### Vagrant command


check version
```bash
vagrant --version
```

create empty vagrant file
```bash
vagrant init
```

create environment
```bash
vagrant up
vagrant up [id]
```

check vagrant
```bash
vagrant status
```

log in to vm
```bash
vagrant ssh
```

check all vagrant environment
```bash
vagrant global-status
```

suspends the machine
```bash
vagrant suspend
vagrant suspend [id]
```

stops and deletes all traces of the vagrant machine
```bash
vagrant destroy
vagrant destroy [id]
```

boxes
```bash
vagrant box list
vagrant box add hashicorp/precise64
```


### Vagrantfile

List of all available vagrant box ([here](https://app.vagrantup.com/boxes/search))
```
hashicorp/precise64
ubuntu/trusty64
```


With provisioning and port forwarding
```ruby
Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.provision :shell, path: "bootstrap.sh"
  config.vm.network :forwarded_port, host: 9200, guest: 9200
  config.vm.provider "virtualbox" do |v|
    v.memory = 2048
    v.cpus = 1
    v.name = "ES-2.x"
  end
end

```
