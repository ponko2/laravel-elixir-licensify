Elixir.ready(() => {
  const uglifyOptions = Elixir.config.js.uglify.options;

  Elixir.config.js.uglify.options = Object.assign(
    uglifyOptions,
    {preserveComments: 'license'}
  );

  Elixir.config.js.browserify.plugins.push({name: 'licensify'});
});
