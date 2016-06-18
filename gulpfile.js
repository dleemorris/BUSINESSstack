var elixir = require('laravel-elixir');
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

/*
var browserify = require('browserify');
var browserifyES6Transpiler = require('browserify-es6-transpiler');
browserify().require("./resources/js/index.js").transform(browserifyES6Transpiler).bundle();
*/

elixir(function(mix) {
  var bootstrapPath = 'node_modules/bootstrap-sass/assets';
  var jqueryPath = 'node_modules/jquery';
  mix.browserify('app.js')
    .copy(jqueryPath + '/dist/jquery.min.js', 'public/js')
    .copy(bootstrapPath + '/fonts', 'public/fonts')
    .copy(bootstrapPath + '/javascripts/bootstrap.min.js', 'public/js')
    .sass('app.scss');
});
