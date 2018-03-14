---
layout: gist
title: Vagrant
---

- configuration and provisioning tool using which you can create VMs or container
- a mechanism to reproduce environments
- needs provider which is VirtualBox/VMware/Docker

https://www.vagrantup.com/

### Quotes

> Development Environments Made Easy

### Get Started

```sh
# check version
vagrant --version

# create some folder
mkdir vagrant_getting_started
cd vagrant_getting_started

# initiate vagrant
vagrant init

# edit vagrantfile (see example below)
vim Vagrantfile

# create environment
vagrant up

# check vagrant
vagrant status

# log in to vm
vagrant ssh

# check all vagrant environment
vagrant global-status

# suspends the machine
vagrant suspend

# stops and deletes all traces of the vagrant machine
vagrant destroy
```

`Vagrantfile` example
```ruby
Vagrant.configure("2") do |config|
  config.vm.box = "hashicorp/precise64"
end
```
