---
layout: post
title: Deploying and auto-updating Sails.js with git and forever
date: 2014-02-16 10:45:57.000000000 -05:00
---


Here are the main things we will be doing in this tutorial.

1. Create a controller that will automatically pull from repo and restart server.
2. Get sails to run in production mode and deploy using forever.
3. Auto update code on git push using git hooks on BitBucket (probably very similar for github)


### Setting up a git deploy controller
In config/routes.js, add this line (or similar)

<code>'/git-deploy': 'main.gitDeploy',</code>

This will point that path to controller method named gitDepoly in MainController.js. (You can modify this to match your project structure)

In MainController.js

    gitDeploy: function (req, res) {
      if(req.param('pw')=="< yourSecretPassword >") {
         var sys = require('sys')
         var exec = require('child_process').exec;
         function puts(error, stdout, stderr) {
             sys.puts(stdout) 
         }
         exec("git reset --hard HEAD && git pull origin master && forever restart 0", puts);
       }
     },
     
We will be using this later to automatically update the code on the server everytime we push to the git repo.


### Getting Sails on the server

On your server:

    cd /var/www/
    git clone <git ssh URL here>
    
In order to continually automatically pull from our git repo we need to set up an SSH key.

Real quick type this.

    ssh-keygen
    vi /root/.ssh/id_rsa.pub

Copy the entire file and paste it add it as a deployment key in the bitbucket UI.
(:q to close out of vi)

Next we are going to set up sails to run in production mode on port 80 by creating a new file: config/local.js


    cd /var/www/<repo name>/config/
    vi local.js

Paste in the following code


    module.exports = {
       port: 80,
       environment: 'production'
    }


(:wq to save and quit vi)

more details on local.js here: <http://sailsjs.org/#!documentation/deployment>
  


### Launch Sails with forever
      cd /var/www/<repo name>
      npm install
      bower install
      sudo npm install forever -g
      forever start app.js
      
You can then view your forever processes by typing:

	forever list
    
You should see your app running as process [0]. This is good because that is the process number we will be restarting after we pull the latest code.


### Adding the git hook

Now put all the pieces together by adding a git post hook in your BitBucket interface

    http://<your.sweet.url.com>/git-deploy?pw=<yourSecretPassword>


Thats all!

#### Current downsides:
* This is relatively unsecure because the git pull is somewhat exposed, I would definitely recommend adding more security to your controller. Any visit to that URL with the password will update the code and restart the server.
* Everytime you push code to the repo the server will restart. I'm not sure how to avoid this. So "hot code pushes" aren't a thing here. Let me know if anyone has a solution to this.
