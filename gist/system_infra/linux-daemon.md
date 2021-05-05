---
layout: gist
title: Linux (Daemon)
category: system_infra
---

# Daemon

Some reading:
- <https://blog.frd.mn/how-to-set-up-proper-startstop-services-ubuntu-debian-mac-windows/>

### No Hang Up

Example:
```bash
nohup ./myprogram > myprogram.out 2>&1 &
```
- `nohup` --> no hang up  
- `2>&1`--> stderr also goes to the stdout  
- `&` --> run on background  


### Screen

```bash
screen -R [name]
screen -ls
screen -x [name]
```

- `ctrl + a + d` to exit
- `ctrl + a + k` to kill

### Supervisor

- <http://supervisord.org/>
- <https://linoxide.com/linux-how-to/supervisor-monitor-linux-servers-processes/>


### Upstart

- <http://upstart.ubuntu.com/>
- <https://www.digitalocean.com/community/tutorials/the-upstart-event-system-what-it-is-and-how-to-use-it>

### Systemd

<https://medium.com/@benmorel/creating-a-linux-service-with-systemd-611b5c8b91d6>