---
layout: post
title: Angular UI Read/Write
date: 2015-01-20 21:56:43.000000000 -05:00
---
![](https://dl.dropboxusercontent.com/u/255297/portfolio/ghost/images/2015/Jan/angularShare.gif)


Recently I've been working on a CMS platform in AngularJS.

Typically CMS's have a lot of forms. Forms are ugly.

The design decision was to limit the amount of screens and forms needed by combining the Read/Edit screen into one with a simple toggle that gracefully transitions between the two states.

Here is a high level overview on how it works

* A custom directive is used to extend ng-model to work on non input elements (div/p/li) etc. This means the model is live updated as you edit, and totally safe when you are not editing. This means the same template could be use for frontend/admin.

* When in "edit" mode, the HTML5 contenteditable attribute is used for text input and the appropriate css classes are added for editing.

* For dropdowns, I forked and simplified a version of angular-dropdown, which is used for dynamic populating/updating the select items. https://github.com/thewaterbear/angular-dropdowns

* Everything is tied together with CSS transitions using ng-class. The DB calls are made using angular $http.


More to come soon!

[View on Dribbble](https://dribbble.com/shots/1891587-Angular-CMS)
