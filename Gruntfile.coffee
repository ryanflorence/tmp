module.exports = (grunt) ->

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks)

  grunt.loadTasks 'tasks'

  grunt.registerTask 'build', [
    'clean:build'
    'emberTemplates'
    'build-index'
    'browserify'
  ]
  grunt.registerTask 'default', ['build:dev', 'watch']

  grunt.initConfig
    watch:
      options:
        livereload: on
      js:
        files: ['app/**/*.js']
        tasks: ['browserify']
      templates:
        files: ['app/templates/**/*.hbs']
        tasks: ['emberTemplates:app', 'browserify']
      css:
        files: ['app/css/**/*.css']

    emberTemplates:
      options:
        templateCompilerPath: 'bower_components/ember-template-compiler/index.js'
        handlebarsPath: 'bower_components/handlebars/handlebars.js'
      app:
        options:
          templateBasePath: 'app/templates/'
        files:
          'app/.templates.js': 'app/templates/{,*/}*.hbs'
      #test:
        #options:
          #templateBasePath: 'test/support/'
        #files:
          #'test/support/templates.js': 'test/support/{,*/}*.hbs'

    browserify:
      options:
        shim:
          env:
            path: 'app/config/env'
            exports: 'Ember'
          jquery:
            path: 'bower_components/jquery/jquery.js'
            exports: 'jQuery'
          handlebars:
            path: 'bower_components/handlebars/handlebars.runtime.js'
            exports: 'Handlebars'
          ember:
            #path: 'bower_components/ember/ember.js'
            path: 'bower_components/ember-canary-dev/index.js'
            exports: 'Ember'
            depends:
              env: 'env'
              handlebars: 'Handlebars'
              jquery: 'jQuery'
      dev:
        options:
          debug: yes # source maps
        files:
          'build/application.js': ['app/.index.js']

    clean:
      build: ['build']

