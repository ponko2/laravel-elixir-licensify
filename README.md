# laravel-elixir-licensify

## Install

```sh
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
