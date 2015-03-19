var gulp = require('gulp');
var sass = require('gulp-sass');
var pleeease = require('gulp-pleeease');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;

// Sass

gulp.task('sass', function () {
    gulp.src('sass/**/*.scss')
        .pipe(sass({errLogToConsole: true})) // Keep running gulp even though occurred compile error
        .pipe(pleeease({
            autoprefixer: {
                browsers: ['last 2 versions']
            }
        }))
        .pipe(gulp.dest('build/css'))
        .pipe(reload({stream:true}));
});

// Js-concat-uglify

gulp.task('jscu', function() {
    gulp.src(['js/*.js'])
        .pipe(concat('ngMorphingModal.min.js'))
        .pipe(uglify({preserveComments: 'some'})) // Keep some comments
        .pipe(gulp.dest('build/js'))
        .pipe(reload({stream:true}));
});
// Js-concat
gulp.task('jsc', function() {
    gulp.src(['js/*.js'])
        .pipe(concat('ngMorphingModal.js'))
        .pipe(gulp.dest('build/js'))
        .pipe(reload({stream:true}));
});

// templates processing

gulp.task('template', function() {
    gulp.src(['js/*.html'])
        .pipe(gulp.dest('build/js'))
        .pipe(reload({stream:true}));
});

// Static server

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./build"
        }
    });
});

// Reload all browsers

gulp.task('bs-reload', function () {
    browserSync.reload();
});

// Task for `gulp` command

gulp.task('ci',['jscu', 'jsc', 'template', 'template'], function() { });

gulp.task('default',['browser-sync'], function() {
    gulp.watch('sass/**/*.scss',['sass']);
    gulp.watch(['js/*.js'],['jscu', 'jsc']);
    gulp.watch(['js/*.html'],['template']);
    gulp.watch("*.html", ['bs-reload']);
});