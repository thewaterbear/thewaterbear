---
layout: post
title: Github, Forking, and NPM
date: 2014-10-21 12:58:26.000000000 -04:00
---
NPM is amazing, but sometimes you gotta tweak some code.

In the past this has stressed me out, I often take the modules out of Bower or NPM and stash them somewhere locally in my project. This breaks the cleanness of a package manager and is definitely not on my list of good ideas I've had. Here is a better way to do it:

First fork the project from Github, clone it locally, make your changes and push. This will give you your own edited version of the module that is under your control.


You can then use that module in your project right from Github. This means you don't have to clutter NPM with nonsense custom packages. The package.json URL to your forked repo will be:
						<code>https://github.com/USERNAME/REPONAME/tarball/master</code>
                        
An example package.json file could look like this:

    {
      "name": "AwesomeProject",
      "dependencies": {
        "sails": "~0.10.5",
        "s3policy": "https://github.com/thewaterbear/s3policy/tarball/master"
      }
    }
   

Thats it! The best part is that this is all open source as well so others can see and use your changes.



    
 
