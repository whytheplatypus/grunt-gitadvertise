/*
 * grunt-gitadvertise
 * https://github.com/whytheplatypus/grunt-gitadvertise
 *
 * Copyright (c) 2013 WhyThePlatypus
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
  grunt.registerTask('gitadsearch', 'Searches for hosted repos', function(name) {
    var done = this.async();

    var mdns = require('mdns');

    var browser = mdns.createBrowser(mdns.tcp('gitad-'+name));
    browser.on('serviceUp', function(service) {
      grunt.log.writeln("found " + name +" at " + service.addresses[0] + ':'+service.port);
    });
    browser.start();
    setTimeout(done, 2000);
  });
};