---
title: The Mighty Ansible
description: I've always been fascinated by automated provisioning tools, but I often found them needlessly complicated. However, my perspective changed completely when I heard about Ansible...
createdAt: 2017-05-02
tags:
  - ansible
  - devops
---

I've always been fascinated by automated provisioning tools, but I often found them needlessly complicated. However, my perspective changed completely when a [friend](https://www.linkedin.com/in/djordjeparovic/) took just five minutes to explain how [Ansible](https://www.ansible.com/) works and how straightforward it is to set up a new project.

## What are the automated provisioning tools?

Automated provisioning tools are used to automate the process of setting up servers or clusters of servers in an infrastructure. Just imagine manually SSH-ing into a hundred machines and running similar commands on each one. Tools like Ansible come to the rescue by enabling you to set up multiple servers in parallel.

## Ansible: Simplicity and Efficiency Combined

So, how does Ansible work? It connects to your servers via SSH and executes the tasks you specify. Once the tasks are completed, Ansible cleans up after itself, leaving your machine clean and as if you had executed the commands manually. Under the hood, Ansible utilizes Python, which most systems already have installed by default. This eliminates the need for any pre-installation on the machines, making Ansible incredibly convenient.

Another great thing about Ansible is that the tasks you create are simply text files written in YAML. This means you can easily store them on Git and keep track of the changes you've made to your servers. It's a handy feature for maintaining version control.

## Getting Started

If you're eager to try Ansible, just install it on your machine and use Vagrant to create virtual machines. That's all you need to get started! The advantage of this approach is that you can "develop" your infrastructure locally and then seamlessly transition to production servers by replacing the IP addresses in the configuration file.

Now, for a tutorial, you'll find an abundant resource of guides and examples out there, so I won't write a step-by-step tutorial. However, I can provide you with some useful links to get you started:

- [Ansible Docs](https://docs.ansible.com)
- [Ansible Galaxy (tasks created by others)](https://galaxy.ansible.com)
- [Simple Ansible examples](https://github.com/ansible/ansible-examples)
