/**
 * app文件夹内的每一个js都压缩成.min.js
 * Created by summer on 2017/3/1.
 */

var fs = require('fs');
var path = require('path');
var merge = require('merge-stream');
var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

var elixir = require('laravel-elixir');

function getFolders(dir) {
    return fs.readdirSync(dir)
        .filter(function(file) {
            return fs.statSync(path.join(dir, file)).isDirectory();
        });
}

elixir.extend('appJs', function (src) {
    var filePath = src || './public/app';

    var floders = getFolders(filePath);

    new elixir.Task('appJs', function () {
        return floders.map(function(floder) {

        })
    })
});