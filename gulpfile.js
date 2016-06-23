var elixir = require('laravel-elixir');
require('babel-preset-es2015');
require('babel-preset-react');
require("babel-polyfill");

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir.config.js.babel.options.presets = [
  "react",
  "es2015"
];

elixir(function(mix) {
  var bootstrapPath = 'node_modules/bootstrap-sass/assets';
  var jqueryPath = 'node_modules/jquery';
  mix.browserify('app.js')
    .copy(jqueryPath + '/dist/jquery.min.js', 'public/js')
    .copy(bootstrapPath + '/fonts', 'public/fonts')
    .copy(bootstrapPath + '/javascripts/bootstrap.min.js', 'public/js')
    .sass('app.scss');
});
