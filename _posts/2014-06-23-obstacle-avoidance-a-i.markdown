---
layout: post
title: Obstacle Avoidance A.I.
date: 2014-06-23 16:32:39.000000000 -04:00
---
Here is some AI I made this weekend for a game I'm working on.

![](https://dl.dropboxusercontent.com/u/255297/portfolio/ghost/images/2014/Jun/goodGif.gif)

####The Scene

The black dots themselves aren't moving that fast vertically, actually they are moving very slow. The concept of speed is faked by "shooting" random blocks upward at a speed set by the character.

Here is what the scene looks like:

![](https://dl.dropboxusercontent.com/u/255297/portfolio/ghost/images/2014/Jun/ryftScene.png)


Since our characters are dots, and they are only going down we don't need to deal with steering and rotation, which is really nice. Each dot has 5 rays (or LASERS!) that point down the screen.


![](https://dl.dropboxusercontent.com/u/255297/portfolio/ghost/images/2014/Jun/laserGifAI.gif)

The actual behavior is really simple, there are two main states, SAFE and UNSAFE. If a dot hits a block with it's awesome laser eyes, then it's UNSAFE, otherwise things are good (SAFE).

SAFE - The dot simply follows the blue block (centred in this case)

UNSAFE - If the center ray triggers the unsafe alarm, the dot can choose any direction to go (left or right) and will move in that direction until its safe again. When it moves, it moves with increasing urgency (faster the longer it is unsafe) If the side rays triggered the alarm, the dot will go the opposite way until it is safe again.

The switching between these two states, makes for an interesting weaving look. (the trail also really helps)

The fact that the AI can decide to go left or right is another thing that gives it a cool look, like the AI is scheming hard and working together.

The choice to go left or right could also be more informed with more data which could make it even more interesting. Where is the guy to chase? Where is he going to be 2 seconds? Where are there obstacles? Where are my co-enemies? Should we form a flying V?



####Current problems:

The AI works well at fast speeds with fewer blocks, but not so well at slow speed with a high density of blocks. Since it's rays are looking so far ahead (in order to have enough reaction time to move out of the way) a common scenario is for the AI to see a block  in the distance, FREAK OUT, and go flying into a block directly to its left or right. This could be solved a few ways I imagine.

Another problem is the balance between chasing and avoidance. Right now it's either doing one or the other, never both at the same time. In certain situations the level becomes so dangerous that the AI is constantly in an state of UNSAFE, which means it abandons its entire mission of chasing the dot. Right now one solution is to have the AI go all kamakazi when it gets within a certain radius of the player, just following the player and having no regard for it's own safety. Mad respect AI.

Thanks for stopping by! If you have questions feel free to hit me up on [twitter](http://www.twitter.com/davechenell).


[Discussion on Reddit](http://www.reddit.com/r/gamedev/comments/28w4as/obstacle_avoidance_ai_i_made_this_weekend/)


[Dribbble Shot](http://drbl.in/lypO)

[Follow Buck Lumber Games on twitter](https://twitter.com/bucklumbergames)




EDIT: (April 2015) James Moulang sent me this gif of a 3D version he built inspired by this method! Check it out [here](http://jamesmoulang.itch.io/infinite-flyer)

![](http://i.imgur.com/V6BbtuY.gif)


