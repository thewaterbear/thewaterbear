---
layout: post
title: Triangulation in Unity3D
date: 2014-03-19 13:29:37.000000000 -04:00
---
Triangulation is an interesting area of video game development that I began heavily investigating last summer. [This is an active forum thread I started that has a lot of great contributions on the topic](http://forum.unity3d.com/threads/181596-Triangulation-of-spline-to-mesh-questions-and-results).


Triangulation is important in video games because sometimes you need to create something at runtime that will interact with the rest of your environment. Using triangulation, you can create an 3D mesh from any defined outline of vertices. 

Some examples are:

*  Creating objects from images (Grafighters),
*  Creating objects from user defined shapes (Crayon Physics Deluxe)
* Creating destructible environments (Worms)

###Different types of Triangulation

Triangulation is the process in which the program decides how to divide these shapes up into the triangles that will make up the final mesh. There are a few different algorithms that can achieve this, each has different strengths and weaknesses.

![](/content/images/2014/Mar/Triangulation.jpg)

In the case of Grafighters, the way that the triangles were distributed was important because of how the mesh was going to be used. Long, uninterrupted lines were not desirable because the mesh was going to be animated, bending and morphing in a bunch of different directions. 

The Delauny Refinement algorithm is the clear winner in terms of final result,  but unfortunately it was too iterative and thus took too long on mobile devices. I ended up using a grid of Steiner Points to break up the long triangles (the far right example above).

Here is an example of an Delauny Refinement algorithm in action.

<style>
.video-container {position: relative;padding-bottom: 56.25%;height: 0;overflow: hidden; margin-top:20px;}
.video-container iframe,.video-container object, .video-container embed {
position: absolute; top: 0; left: 0; width: 100%;height: 100%;}
</style>

<div class='video-container'><iframe src='//www.youtube.com/embed/Nl1JSHIMRbw' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div>
http://en.wikipedia.org/wiki/Ruppert's_algorithm
