---
layout: post
title: Open folder in Sublime Text from the command line
date: 2014-02-15 17:47:01.000000000 -05:00
---
![](http://s3.amazonaws.com/waterbear/portfolio/ghost/images/2014/Feb/Screen_Shot_2014_02_15_at_9_35_10_PM.png)

This is a quick tip I recently found that saves a ton of time.

Project management in Sublime Text can be a slow process if you are in the terminal all day bouncing between different folders and projects.

Lots of times you just want to be able to pop open your current terminal folder in Sublime with one command.

Luckily this does exactly that.

#####Run this from the terminal
    sudo ln -s /Applications/Sublime Text.app/Contents/SharedSupport/bin/subl /bin/subl
    

#####Then from your current directory run
    subl .


Thats it!


Source:
https://bensmann.no/open-folder-in-sublime/
