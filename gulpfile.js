var elixir = require('laravel-elixir');

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

elixir(function(mix) {
  var bootstrapPath = 'node_modules/bootstrap-sass/assets';
  var jqueryPath = 'node_modules/jquery';
  mix.sass('app.scss')
    .copy(jqueryPath + '/dist/jquery.min.js', 'public/js')
    .copy(bootstrapPath + '/fonts', 'public/fonts')
    .copy(bootstrapPath + '/javascripts/bootstrap.min.js', 'public/js');
});
