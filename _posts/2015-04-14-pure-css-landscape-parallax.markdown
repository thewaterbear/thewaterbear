---
layout: post
title: Landscape parallax using CSS
date: 2015-04-14 15:52:52.000000000 -04:00
---
<style>
img.gif {width:100%}
</style>
<style>
img.gif {width:100%}
</style>

<img src="http://i.imgur.com/AvLh7f0.gif" class="gif"/>

######[View the Live Site](http://skyworks.enormo.us/)

##The Design

The design for this project was done by Eric Clecker, hes awesome [and you should follow him.](https://dribbble.com/cleck) Below is the progression of the illustrations, from the blocking sketch to coloring and texturing.

![](/content/images/2015/Apr/unnamed.jpg)

![](/content/images/2015/Apr/unnamed_1.jpg)

![](/content/images/2015/Apr/unnamed_2.jpg)

![](/content/images/2015/Apr/unnamed.png)

![](/content/images/2015/Apr/unnamed_4.jpg)



##The Code

######[View the Live Site](http://skyworks.enormo.us/)

The site was built using [this]( http://keithclark.co.uk/articles/pure-css-parallax-websites/) implementation Keith Clark came up with. I've done a variety of parallax effects before using all kinds of javascript but this one is by far my favorite because it uses CSS only which is huge.  Keith's tutorial is great and the debug mode is especially cool. http://keithclark.co.uk/articles/pure-css-parallax-websites/

I did uncover a few issues that hopefully can help other people trying to implement this effect. 

####CSS things to note
* Sometimes the page length would get wayy out of control. I was messing with this for a a while before I figured it out. You can fix this by setting all the parallax layers  to **position:fixed** to make sure they aren't included in the overall scroll calculation.
* You might need and overlay layer for scrolling. I was facing a very strange issue only on my retina screen in chrome where the trackpad wouldn't scroll within the parallax tag but instead tried to scroll on the body.
I believe this has to do with the translateZ and can be fixed by adding transparent layers at the standard depth (translateZ(0)) with the css property **pointer-events:none** 
    


#### Does it work on mobile?

Yes and no. Although technically it works because it is just CSS, since you are scrolling within the parallax tag, it does not have the smooth iOS momentum scrolling. This is kind of a deal breaker. The usual smooth scrolling fix of adding the below to the scrolling container, didn't work and completely botched everything.

	  overflow-y: scroll;
      -webkit-overflow-scrolling: touch;
I honestly didn't test this very much and wasn't able to test android either, so its possible it could be tweaked to work on mobile. If anyone investigates mobile compaibility more defintley [let me know on twitter](http://www.twitter.com/davechenell)!




##Final Result
<img src="http://i.imgur.com/AvLh7f0.gif" class="gif"/>
#####[View the Live Site](http://skyworks.enormo.us/)
######[View on Dribbble](https://dribbble.com/shots/2019575-Skyworks-Parallax)






##Update: April 16th

Check out the Codepen example using CSS only.

<p data-height="705" data-theme-id="0" data-slug-hash="Qweqdb" data-default-tab="result" data-user="dchen05" class='codepen'>See the Pen <a href='http://codepen.io/dchen05/pen/Qweqdb/'>Parallax Landscape CSS only</a> by Dave Chenell (<a href='http://codepen.io/dchen05'>@dchen05</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

http://codepen.io/dchen05/pen/Qweqdb
