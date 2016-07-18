---
layout: post
title: Angular Filter Snippet
date: 2014-09-21 17:34:52.000000000 -04:00
---

   In data heavy applications, It's common to have a single page (or modal) that shows an individual record. This page is often a child to a parent page that contains a larger list of records. This could be a feed, list of users, blog posts,  etc. When transitioning from the list page to the single page, we don't need to hit the database at all since we already have all the data we need on the parent page, making for a silky smooth transition. 

As an example, let's say you have a big object of users on one page and you want to transition to a page that shows information about a single user.

By passing any variable in the $stateParams, you can filter your users list to show any segment you wish.

	//Get one user based on ID
    $scope.user = $filter('filter')(users, {id: $stateParams.id})[0];
    
	//Get an array of users based on name
    $scope.userList = $filter('filter')(users, {name: $stateParams.name});
    
   One last thing to note, is to make sure your child page is set up properly as a dependent of your parent page, that way when navigating directly to your child page URL, the data from the parent page will be guaranteed to be there.
