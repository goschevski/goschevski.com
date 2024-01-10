---
title: Cloud hosting for developers
description: If you're on the hunt for cloud hosting that doesn't make you set up a ton of stuff before you can even get your app up and running, I've got a solution for you...
createdAt: 2021-05-02
tags:
  - devops
---

## Important note
*This post is not sponsored by render.com in any way. I haven't contacted or spoken to them. The opinions shared here are my honest thoughts aimed at helping you. If render.com appreciates this post, they are welcome to provide some free stuff, which I would greatly appreciate.*

## The problem

When I was just 15 years old back in 2007, I remember spending countless hours trying to install Apache, PHP, and MySQL on my computer. I wasted precious coding time. That's when I stumbled upon XAMPP, and it was a game-changer. Fast forward ten years later when I had to set up services on AWS, and I found myself in a similar bind. Deciding which machine, how much memory, CPU, and dealing with other unknowns left me feeling overwhelmed. In recent years, I've noticed that developers and devops work has begun to overlap, requiring us to have knowledge in both areas.

Many online tutorials show you how to buy a machine, copy code to it, and run a node process in the background, but that's not a realistic example. In the real world, your app will fail, and constantly logging in to restart the process is not ideal. You'll need a way to get notified when something breaks. Managing logs becomes important, and deploying code through git hooks beats manual uploading any day. Auto-scaling your app is a must-have. These are just the bare minimum requirements, and when you add microservices, private networks, shared storage, and more, the complexity grows beyond a developer's expertise.

## Tools don't replace knowledge

I've attempted to do everything myself, and I even wrote [about the wonders of Ansible](/the-mighty-ansible)—how it simplifies tasks. However, Ansible, or any other tool for that matter, won't solve all your problems. It helps, but it can't set up a server for you because it lacks the necessary knowledge—you must provide it. So even if you stumble upon the perfect tool like Ansible, be prepared to learn things you may not initially have an interest in.

## Render.com: A Solution That Simplifies Deployment

During my search for a solution to this problem, I discovered [render.com](https://render.com). The user experience of their website made it feel like I had been using it for years, all within just three minutes. **I successfully deployed static sites, node.js apps, and even dockerized node.js apps in just 15 minutes**. If you want auto-scaling, it's as easy as two clicks. I no longer worry about managing machines, users, or permissions—I just want to focus on running my applications. Admittedly, if you're a seasoned expert, render.com may not be the most cost-effective solution. However, the amount of time and sanity it has saved me makes it worth the slightly higher cost.
