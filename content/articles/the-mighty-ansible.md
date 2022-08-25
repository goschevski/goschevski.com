---
collection: posts
title: The Mighty Ansible
description: I'd always been interested in automated provisioning tools, but they all seemed overly complicated to me. I was astounded when a friend explained in 5 minutes how Ansible works and how simple it is to set up a new project...
createdAt: 2017-05-02
tags:
  - ansible
  - devops
---

I'd always been interested in automated provisioning tools, but they all seemed overly complicated to me. I was astounded when a [friend](https://www.linkedin.com/in/djordjeparovic/) explained in 5 minutes how [Ansible](https://www.ansible.com/) works and how simple it is to set up a new project.

### What are the automated provisioning tools?

We use this tools to automate the setup of a server or cluster of servers (infrastructure). Consider SSHing into 100 machines and running the same or similar commands on each one. Tools like Ansible can assist you in setting up multiple servers in parallel.

### How does Ansible works?

Ansible connects to your servers via SSH and executes tasks you specify. After it completes, it removes everything that tool required to function, leaving your machine clean and looking as if you manually executed commands. It uses Python in the background, which most (if not all) systems have installed by default, so no pre-installation is required on the machines, which is what makes Ansible so great.

Because the tasks you create are text files (YAML), they can be stored on git. This useful feature allows you to keep track of the changes you've made to your servers.

### How should I try it?

You can install Ansible on your machine and use Vagrant to create virtual machines. That is all you need to get started. The advantage of this approach is that you can "develop" your infrastructure locally and then, when ready, replace IP addresses of VMs with production servers inside the config file.

### Tutorial

I'm confident you can find a plethora of tutorials, so I won't write one, but I will provide some useful links:

- [Ansible Docs](http://docs.ansible.com/ansible/intro.html)
- [Ansible Galaxy (tasks created by others)](https://galaxy.ansible.com)
- [Simple Ansible examples](https://github.com/ansible/ansible-examples)
