/*
 * grunt-gitadvertise
 * https://github.com/whytheplatypus/grunt-gitadvertise
 *
 * Copyright (c) 2013 WhyThePlatypus
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {

  // Please see the grunt documentation for more information regarding task and
  // helper creation: https://github.com/gruntjs/grunt/blob/master/docs/toc.md

  // ==========================================================================
  // TASKS
  // ==========================================================================

  grunt.registerTask('gitadvertise', 'Host and advertise the local git repo', function(name) {
    grunt.log.writeln(grunt.helper('gitadvertise'));
    grunt.file.copy(grunt.task.getFile('files/post-commit'), '.git/hooks/post-commit');
    var done = this.async();

    var restify = require('restify'),
      portfinder = require('portfinder'),
      mdns = require('mdns');

    var server = restify.createServer();

    var gitDir = ".git"//osmething 
    server.pre(function(req, res, next){
      if(req.url == '/'){
        req.url = '/.git'
      }
      return next();
    });
    server.get('/\/.*/', restify.serveStatic({
      directory: "."
    }));

    portfinder.getPort(function (err, port) {
      if(err){
        grunt.log.error(err);
        return err;
      }
      server.listen(port, function() {
        grunt.log.writeln(server.name+ ' listening at '+server.url);
        var ad = mdns.createAdvertisement(mdns.tcp('gitad-'+name), port);
        ad.start();
        done();
      });
    });
  });

  // ==========================================================================
  // HELPERS
  // ==========================================================================

  grunt.registerHelper('gitadvertise', function() {
    return 'gitadvertise!!!';
  });

};
