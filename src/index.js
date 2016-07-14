const objectAssign  = require('object-assign');

Elixir.ready(() => {
  const uglifyOptions = Elixir.config.js.uglify.options;

  Elixir.config.js.uglify.options = objectAssign(
    uglifyOptions,
    {preserveComments: 'license'}
  );

  Elixir.config.js.browserify.plugins.push({name: 'licensify'});
});
