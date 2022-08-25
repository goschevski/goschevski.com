---
collection: posts
title: Cloud hosting for developers
description: If you are looking for a cloud hosting where you don't need to setup bunch of things before you even start deploying app, there is a solution...
createdAt: 2021-05-02
tags:
  - devops
---

### Important note

This post is not sponsored by render.com anyhow. I never contacted them or spoke to them. This is my honest opinion, which I would like to share in order to help you guys. If they like what they read here, they are welcome to give me some free stuff. I wouldn't mind at all.

### Problem

Back in 2007, I was 15 years old and trying to install Apache, PHP, and MySQL for the first time on my machine. I squandered many hours that I could have spent writing code. It was a revelation when I discovered XAMPP. When I had to set up a few services on AWS 10 years later, I felt the same sense of helplessness. I had to figure out which machine I want, how much memory, CPU, and other unknowns. Over the last few years, I've noticed that developer and devops work is increasingly overlapping, and we need to know a little bit about both.

Online tutorials show how to buy a machine, scp code to it, and spin a node process in the background, however, this is not real-world example. Your app will fail, and you don't want to constantly login to the machine and restart the process. You'll also need something to notify you when it fails. You'll most likely want to aggregate logs somewhere. You'd like to deploy code via git hooks rather than manually uploading it every time. You want to auto-scale your app. That, in my opinion, is the bare minimum of requirements. When you consider microservices, private networks, shared storage, and so on, the story becomes increasingly complex and goes beyond the scope of a developer's knowledge.

### Tools doesn't replace knowledge

I tried doing everything by myself, and I even [wrote about ansible](/the-mighty-ansible) and how great it is, but ansible will not solve your problem. It will make things easier for you, but it will not set up a server for you because it does not know how; you must tell it how. So, even if you find the perfect tool, such as Ansible, you still need to learn a bunch of things that you may not be interested in.

### [Render.com](https://render.com)

While looking for a solution to this problem, I came across render.com. I like websites that make you feel like you've been using them for years after only 3 minutes. **I successfully deployed a static site, a node.js app, and a dockerized node.js app in 15 minutes.** You want auto scale - boom, two clicks. I'm not concerned with machines, users, or permissions; I just want to run applications. I realize that if you know what you're doing, this is probably not the cheapest solution, but I saved so many hours and nerves that I'm willing to pay more for it.
