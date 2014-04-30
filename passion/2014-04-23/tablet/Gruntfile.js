/*
 * plus template for qz ad development
 * https://bitbucket.org/quartz/plus-ad-template
 *
 * Copyright (c) 2014 Richard Stovall
 * Not licensed for public use
 */

'use strict';

module.exports = function(grunt) {
  
  require('load-grunt-tasks')(grunt);
  
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-prettify');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('qzready');
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    compass: {
      build: {
        options: {
          sassDir: 'scss',
          cssDir: 'css',
          outputStyle: 'compact',
          force: true,
          noLineComments: true
        }
      }
    },
    connect: {
      build: {
        options: {
          hostname: '',
          port: 8002,
          base: ''
        }
      }
    },
    watch: {
      scss: {
        files: 'scss/**/*.scss',
        tasks: ['compass:build'],
        options: {
          livereload: true
        }
      },
      js: {
        files: 'js/**/*.js',
        tasks: [],
        options: {
          livereload: true
        }
      },
      once: {
        files: 'index.html',
        tasks: [],
        options: {
          livereload: true
        }
      }
    },
    open: {
      build: {
        path: 'http://localhost:8002'
      }
    },
    qzready: {
      deploy: {
        options: {
          base: 'http://ads.qz.com/sponsors',
          client: 'zurich',
          campaign: 'passion',
          date: '2014-04-23',
          unit: 'tablet',
          version: '3',
          internal_scripts: [
            
          ],
          external_scripts: [
            'http://s0.2mdn.net/ads/studio/Enabler.js',
            'http://app.qz.com/js/vendor/jQuery-min.js',
            'http://app.qz.com/js/frameMessager/min/frameMessager.min.2.5.48.js',
            'http://app.qz.com/js/frameMessager/QZIX.js'
          ]
        }
      }
    }
  });

  grunt.registerTask('default', ['compass:build', 'connect:build', 'open:build', 'watch']);
  grunt.registerTask('ready', ['qzready']);
};
