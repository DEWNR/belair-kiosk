var config       = require('../config')
if(!config.tasks.html) return

var browserSync  = require('browser-sync')
var gulp         = require('gulp')
var gulpif       = require('gulp-if')
var handleErrors = require('../lib/handleErrors')
var htmlmin      = require('gulp-htmlmin')
var path         = require('path')
var fs           = require('fs')
var jsoncombine  = require("gulp-jsoncombine")
var gulpSequence = require('gulp-sequence')

var exclude = path.normalize('!**/{' + config.tasks.html.excludeFolders.join(',') + '}/**')

var paths = {
    src: [path.join(config.root.src, config.tasks.html.src, '/**/*.html'), exclude],
    dest: path.join(config.root.dest, config.tasks.html.dest),
}





var htmlTask = function(cb) {

    return gulp.src(config.tasks.html.templateFiles)
        .pipe(gulpif(global.production, htmlmin(config.tasks.html.htmlmin)))
        .pipe(gulp.dest(paths.dest))
        .pipe(browserSync.stream())
}

gulp.task('html', htmlTask)

module.exports = htmlTask
