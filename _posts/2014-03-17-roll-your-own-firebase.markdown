---
layout: post
title: Roll your own Firebase
date: 2014-03-17 14:30:52.000000000 -04:00
---

![](/content/images/2014/Mar/stackTown.jpg)

Firebase is pretty awesome service.
https://www.firebase.com/

Sometimes its even more awesome to make your own.

By chaining together an all star stack of web frameworks, you can achieve the same outcome that firebase promises with even more control. Creating a realtime webapp with no backend code.

This repo is a perfect example of where to start. The best thing to do is clone this repo and start playing around.
https://github.com/cgmartin/sailsjs-angularjs-bootstrap-example

Here is a breakdown of what is happening and what everything is used for.

<strong>SailsJS</strong>- This node js framework will power your backend. By default Sails automatically creates an API by mapping generic CRUD commands to your models, this means all you have to do here is define your data models and link up a connection to your database of choice. This particular version of Sails also uses Jade for templating (but can support any other templating language)


<strong>Angular JS</strong> - The magical front end framework. Getting started with Angular can be daunting, mostly because of the terminology (Factories, Directives, Services) but after a quick runthrough of these video tutorials, you understand how amazingly awesome it is, especially when used in this setup.
https://egghead.io/tags/AngularJS

<strong>Socket.io</strong>- Socket io keeps things realtime. Using socket.io, we can link data from our frontend (Angular) to our backend (Sails) in realtime. This gives you direct CRUD access from Angular, allowing you to put most of your application logic in Angular controllers, while not worrying about the backend.

<strong>Bootstrap</strong> - Bootstrap keeps things looking good and is very helpful for making things responsive very quickly. Bootstrap comes with a ton of frontend elements (modals, buttons, dropdowns) that you will find very handy. This repo links Bootstrap with Angular very nicely. 

I've just started working on pretty UI intense realtime web app [explain.rs](http://explain.rs). With this setup it has been the most pleasurable web development experience I've ever had.

It's nice to not "have" to write backend code for simple things, but to also have the flexibility to when its needed.

P.S - Firebase is still an awesome service.

P.S.S - Special shout out to [Chris Martin](http://twitter.com/c_g_martin) for the work putting together the original repo. As Chris states, the code was quickly put together and not "production ready". While I haven't found any bugs while working with it, I would echo the same warning.
