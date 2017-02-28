var elixir = require('laravel-elixir');
require('./tasks/ngHtml2Js.task.js');
require('./tasks/bower.task.js');
var bowerDir='resources/assets/bower/';
var lessPaths = [
    bowerDir + "bootstrap/less",
    bowerDir + "font-awesome/less"
];
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
    //mix.sass('app.scss');
    var assets = [
        'public/js/vendor.js',
        'public/js/partials.js',
        'public/js/app.js',
        'public/css/vendor.css',
        'public/css/app.css'
    ];

    mix.bower()
        .scripts([
            '/app/base.js',
            '/app/ocLazyload.config.js',
            '/app/route.config.js'
        ], 'public/js/app.js','./public/')
        .ngHtml2Js('./resources/views/tpl/**/*.html')
        .less('./resources/assets/bower/**/*.less', 'public/css')
        .copy([bowerDir + 'font-awesome/fonts', bowerDir+'bootstrap/fonts'], 'public/fonts')
        .version(assets);
});
