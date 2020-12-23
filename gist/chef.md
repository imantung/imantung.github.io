---
layout: gist
title: Chef
---

# Chef

> Turn your infrastructure into code

References:
- [Official Web](https://www.chef.io/)
- [Why Configuration Manager?](https://www.upguard.com/articles/the-7-configuration-management-tools-you-need-to-know)
- [Chef Server vs Chef Zero vs Chef Solo](http://blog.differentpla.net/blog/2014/11/13/which-chef)


### Basic Concept

Cookbook --> project configuration

Workstation --> your local where you setup/manage cookbook
- `Check DK` Development Kit
- `Chef-Repo` Working directory contains Cookbooks, Roles, Data bags, environments, etc.
- `Chef` tool to manage cookbook
- `Knife` tool to communicate with ChefServer

Chef Server --> a hub for a configuration data
- [Server Component](https://docs.chef.io/server_components.html)
- `ChefSupermarket` community cookbook that free to use

Nodes --> machines that are managed/configurated by Chef
- `ChefClient` run the automation on node
- `Ohai` collect system configuration data

`Berkshelf`: dependency manager


### Chef-Repo

[Chef Repo Doc](https://docs.chef.io/chef_repo.html)

Directory structure
- `.chef` validation key files and `knife.rb`
- `cookbooks`
- `data_bags` global variable
- `environments`
- `roles`

[knife.rb Doc](https://docs.chef.io/config_rb_knife.html)

`knife.rb` -> configuration details for knife
  - Is loaded every time this executable is run
  - Is not created by default
  - Default path: `.chef/chef.rb`

`cookbooks` folder can be added to `.gitignore`


### Setup Workstation

[Official docs](https://docs.chef.io/workstation.html)

1. Install [Chef DK](https://downloads.chef.io/chefdk)
2. Create or Clone chef repo `git clone CHEF_REPO`
3. ssh to chef server
4. (If not exist) Create organization . This step will generate `ORG_NAME.pem`
```bash
chef-server-ctl org-create ORG_NAME ORG_FULL_NAME -f FILE_NAME
```
5. Create user. This step will generate `USERNAME.pem`
```bash
chef-server-ctl user-create USER_NAME FIRST_NAME LAST_NAME EMAIL PASSWORD -f FILE_NAME
```
6. Add user to organization
```bash
sudo chef-server-ctl org-user-add ORG_NAME USER_NAME
```
7. Exit from chef serve (back to your workstation)
8. Change directory to chef repo `cd CHEF_REPO`
9. Create .chef directory `mkdir .chef`
10. Move `ORG_NAME.pem` and `USERNAME.pem` to .chef directory
11. Setup your `knife.rb`
```rb
current_dir = File.dirname(__FILE__)
log_level                :info
log_location             STDOUT
node_name                'node_name'
client_key               "#{current_dir}/USER.pem"
validation_client_name   'ORG_NAME-validator'
validation_key           "#{current_dir}/ORGANIZATION-validator.pem"
chef_server_url          'https://api.chef.io/organizations/ORG_NAME'
cache_type               'BasicFile'
cache_options( :path => "#{ENV['HOME']}/.chef/checksums" )
cookbook_path            ["#{current_dir}/../cookbooks"]
```
12. Get SSL Certificate `knife ssl fetch`
13. Test `knife client list`

### Setup Node

1. Change directory to chef repo.
2. Install `chef-client` to target system by bootstrapping.
    ```bash
    # plain
    knife bootstrap FQDN_or_IP_ADDRESS

    # with some option
    knife bootstrap FQDN_or_IP_ADDRESS -i PEM_FILE  -E ENVIRONMENT -N NOTE -r RECIPE --bootstrap-version VERSION -x USER --sudo
    ```
3. Run `chef-client` on each machine. Shortcut way to using `knife ssh`
    ```bash
    # run chef-client on NODE
    knife ssh 'name:NODE' 'sudo chef-client'

    # run chef-client on all NODE
    knife ssh 'name:*' 'sudo chef-client'

    # run chef-client  on all of the web servers running Ubuntu on the Amazon EC2 platform
    knife ssh "role:web" "sudo chef-client" -x ubuntu -a ec2.public_hostname

    # upgrade all nodes
    knife ssh name:* "sudo aptitude upgrade -y"
    ```

[chef-client Document](https://docs.chef.io/ctl_chef_client.html)

Undo bootstrapping
```bash
knife node delete --yes NODENAME
knife client delete --yes NODENAME
```

### Cookbooks

Structure
- `Attributes` details of node
- `Recipes`
- `metadata.rb`

Test your cookbook using [kitchen-test](https://docs.chef.io/kitchen.html)

Some knife command
```bash
# new cookbook
chef generate cookbook NAME

# upload cookbook
knife cookbook upload NAME

# list of cookbook
knife cookbook list
```

### Misc

Stacktrace for chef solo
```~/chef-solo/local-mode-cache/cache/chef-stacktrace.out```
