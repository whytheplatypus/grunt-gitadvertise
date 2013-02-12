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

  grunt.registerTask('gitadvertise', 'Your task description goes here.', function() {
    grunt.log.write(grunt.helper('gitadvertise'));
  });

  // ==========================================================================
  // HELPERS
  // ==========================================================================

  grunt.registerHelper('gitadvertise', function() {
    return 'gitadvertise!!!';
  });

};
