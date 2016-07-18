---
layout: post
title: After Effects Circle Expression
date: 2014-08-28 10:08:38.000000000 -04:00
---
This is handy expression for creating circle motion in AE.

I use this most often when creating circles that are rendered with Particlar. By setting the emiter to a light and adding this expression to the position property of that light, you get a perfect circle particle trail.

    radius = 300;
    angle = time * 200;
    x = radius*Math.cos(degreesToRadians(angle));
    y = radius*Math.sin(degreesToRadians(angle));
    z = 0;
    center = [400,300,0]; //or wherever you want it to be
    add(center, [x,y,z]);

