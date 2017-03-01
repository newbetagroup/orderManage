var elixir = require('laravel-elixir');
require('./tasks/bower.task.js');
require('./tasks/ngHtml2Js.task.js');
var bowerDir='resources/assets/bower/';

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
        'public/js/appinit.js',
        'public/js/app.js',
        'public/css/vendor.css',
        'public/css/less.css',
        'public/css/app.css'
    ];

    mix.bower()
        .scripts([
            '/app/base.js',
            '/app/ocLazyload.config.js',
            '/app/route.config.js'
        ], 'public/js/appinit.js','./public/')
        .scripts([
            '/libs/lodash/lodash.min.js',
            '/app/common/directives/orderTrackedTable.js',
            '/libs/jquerydatetime/jquery.datetimepicker.js',
            '/app/common/directives/angular.datetime.js',
            '/app/common/service/common.js',
            '/app/user/user.js'
        ], 'public/js/app.js', './public/')
        .styles([
            '/resources/assets/css/base.css',
            '/resources/assets/css/libs.css',
            '/resources/assets/css/user.css',
            '/resources/assets/css/post.css',
            '/resources/assets/css/order.css',
            '/resources/assets/css/directive.css',
            '/resources/assets/css/rewrite.css'
        ], 'public/css/app.css')
        .ngHtml2Js('./resources/views/tpl/**/*.html')
        .copy([bowerDir + 'font-awesome/fonts', bowerDir+'bootstrap/fonts'], 'public/build/fonts')
        .copy(['public/fonts'], 'public/build/fonts')
        .version(assets);
});
