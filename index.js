'use strict';

var Elixir = require('laravel-elixir');
var objectAssign = require('object-assign');
var uglifyOptions = Elixir.config.js.uglify.options;

Elixir.config.js.uglify.options = objectAssign(uglifyOptions, {
  preserveComments: 'license'
});

Elixir.config.js.browserify.plugins.push({
  name: 'licensify'
});
