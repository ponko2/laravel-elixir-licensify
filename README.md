# laravel-elixir-licensify

[![Greenkeeper badge](https://badges.greenkeeper.io/ponko2/laravel-elixir-licensify.svg)](https://greenkeeper.io/)

## Install

```sh
$ npm install laravel-elixir-browserify-official --save-dev
$ npm install laravel-elixir-licensify --save-dev
```

## Usage

```javascript
// gulpfile.js
var elixir = require('laravel-elixir');

require('laravel-elixir-licensify');

elixir(function(mix) {
  mix.browserify('main.js');
});
```
