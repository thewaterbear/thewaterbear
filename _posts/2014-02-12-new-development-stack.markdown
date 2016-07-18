---
layout: post
title: New Development Stack
date: 2014-02-12 17:14:00.000000000 -05:00
---
![](/content/images/2014/Feb/sailsjs-1.png)


After roughly a year long break from web development to work in Unity and iOS, I’m back.

Learning completely different languages on different platforms helps tremendously with web development. You begin to see why certain things were built the way they were and why different platforms adopt certain methodologies.
This is especially true with more traditional controlled languages vs the web where anybody can make the rules.
 

####Here is my current setup:

* Sails js
* Jade
* LESS
* Host: Digital Ocean
* Storage: S3
* DB: Undecided

**Sails.js** is a pretty awesome framework. It takes care of most of the annoying parts of web development and gets you up and running very quickly. (http://www.sailsjs.com)

**LESS** is how css should be (http://www.lesscss.org)

**Jade** is pretty next level. The syntax is super clean and simple, it feels awkward at first, but I’m a huge fan. It works flawlessly with Sail.js and is included from the start. (http://jade-lang.com/)

**Digital Ocean** is my new favorite multi purpose cloud host. After trying almost every other host out there, Digital Ocean had the best user experience. You can quickly create servers with a bunch of preset options, simple ssh access, and its very cheap. It also has the most comprehensive knowledge base of any host I have seen. Chances are they will have an article that explains exactly what you are trying to do. (https://www.digitalocean.com/)

**Database** -  Not sure quite yet, I will probably use mongo for the time being. I’m debating between hosting the DB on the local server itself or using a DBAAS like MongoLab or similar.
One awesome DB feature Sails has is called Waterline. It allows you to use a single syntax to interact with the database, then you can swap out the database technology with whatever you want. (mongo, sql, reddis, etc) Very cool.

If you want a good starter example of the above stack, here is a good test repo to clone to get familiar with how things work. (https://github.com/cgmartin/sailsjs-angularjs-bootstrap-example)


If you are forced into doing wordpress development for some crazy reason, the roots theme framework lets you use some of these new development techniques with wordpress http://roots.io/


