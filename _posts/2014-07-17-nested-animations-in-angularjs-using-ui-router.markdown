---
layout: post
title: Nested animations in AngularJS using ui-router
date: 2014-07-17 11:42:25.000000000 -04:00
---
Yesterday I was stumped on how to effectively set up nested transition animations in AngularJS with ui-router.

I didn't want to use javascript and muck up controllers, so I found a very simple and clean solution using LESS.

Here is an example of the final result.

![](http://s3.amazonaws.com/waterbear/portfolio/ghost/images/2014/Jul/transitionBig.gif)


##How it works
To start, make sure you include 'ngAnimate' and 'ui-router' in your  app and you have a handle on nested views and CSS animations in general.


Here is the base html. The goal is to have animation happen in the sidebar and dashboard ui-views when the master ui-veiw state changes.

	    <div id="masterUI" ui-view="master">
        	<!-- loaded by templates-->
      	  <div id="sidebarUI" ui-view="sidebar"></div>
            <div id="dashboardUI" ui-view="dashboard"></div>
    	</div>
    
First we have to make sure the transitions are set up on the divs we want to animate. (using LESS mixins)

 	#masterUI { //very important!
		.transition(all 1s); 
        }
    
    #sidebar-wrapper, #topBar {
		.transition(all .5s ease-out);
	}


IMPORTANT NOTE: If using CSS3 transitions, all child transitions should be completed in under the transition time for masterUI otherwise things will get weird. If using CSS3 custom animations (like in animate.css) then this can be set to something low like 01.s if desired.

 
 Here is the LESS or SASS that actually performs the animation (similar can be achieved with vanilla CSS)
 	
    #masterUI.ng-enter {
      (animate any div in your child ui-views)
  	 #sidebar-wrapper { .translate3d(-@sidebarSize,0,0); }
 	  #topBar { .translate3d(0,-65px,0); }
    }
    #mainView.ng-enter-active {
  	 #sidebar-wrapper{ .translate3d(0,0,0); }
 	  #topBar { .translate3d(0,0,0); }
    }
    
    #mainView.ng-leave { etc.. }
    #mainView.ng-leave-active { etc.. }
    
 This is saying that when the masterUI view state changes, perform these animations on the two inside it divs. These divs can be anything in either the sidebarUI view or dashboardUI view. The animation flows from enter -> enter-active and the same applies for leave -> leave-active
 
 Another nice thing is that these transitions are only applied on a  #mainView change and completely separate from transitions when the child view itself changes.
    
 For more fun, add [Animate.css](http://daneden.github.io/animate.css/) to your project (covert it to LESS and import it) or create your own custom animation classes. The syntax is now  higher level and more readable. You also don't need to include the ng-enter-active class!
 
 	#masterUI.ng-enter {
  	 #sidebar-wrapper { .fadeInLeft; }
 	  #topBar { .fadeInUp; }
    }
    

##Conclusion
 
 These examples are simple, but adding more effects, delays, and custom animations can make for much more dynamic transitions.
    
 In my opinion this is a pretty awesome and flexible way to get pure CSS transitions with nested views.
 

[Let me know what you think on twitter](http://www.twitter.com/davechenell)

UPDATE: Whoa thanks for sharing this everyone, I had no idea this post would be so popular. I wrote this post in a frenzy because I was really excited about it. I'm working on a repo and plunkr right now that lays everything out clearly. Will report back.

UPDATE 2: Here is a simple Plunkr on how to use nested transitions with Animate.css
http://plnkr.co/edit/ZO2Qhz?p=preview


