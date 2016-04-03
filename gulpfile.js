"use strict";

const   gulp = require('gulp');
const karma = require("gulp-karma-runner");
const DIST = "dist";


gulp.task('lint', function() {
    const jshint = require('gulp-jshint');
    console.log("Linting JavaScript: ");
    return gulp.src(["gulpfile.js","src/**/*.js"])
        .pipe(jshint({
            esversion: 6,
            bitwise: true, // no bitwise operators, they're probably mistakes
            curly: true, // curly braces required around blocks
            eqeqeq: true, // require strict comparison
            forin: true, // require for in loops to filter object's items
            freeze: true, // prohibit overwriting native objects
            latedef: "nofunc", // trying to use variables before defining, not functions
            nonbsp: true, // no nonbreaking white space
            nonew: true, // no calling constructor that doesn't return an object
            //undef: true, // variables must be defined
            // set environments
            node: true,
            browser: true,
            globals: []
        }))
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail'));

});

gulp.task("test", function () {
    return gulp.src([
        "spec/**/*.js",
        "src/**/*.js"
    ], {"read": false}).pipe(
        karma.runner({
            configFile: __dirname + '/karma.conf.js',
            "singleRun": false
        })
    );
});

gulp.task('default', gulp.parallel(['lint','test']), function() {
    return console.log('\n\nBUILD OK');
});

gulp.task('clean', function() {
    const del = require('del');
    console.log ("removing dist directory");
    return del([
        'dist/**/*',
        'dist'
    ]);
});

gulp.task("copy", function() {
    return gulp.src('src/*.html').pipe(gulp.dest(DIST));
});

gulp.task('webpack', function() {
    const webpack = require('gulp-webpack');
    return gulp.src('src/scripts/app.js')
        .pipe(webpack( require('./webpack.config.js') ))
        .pipe(gulp.dest(DIST + "/scripts"));
});

gulp.task("build", gulp.series("clean",gulp.parallel("copy","webpack")));

gulp.task('karma', function (done) {
    gulp.src([
            "src/**/*.js",
            "spec/**/*.js"
        ],
        {"read": false}).pipe(
        karma.server({
            configFile: __dirname + '/karma.conf.js',
            "singleRun": false
        })
    );
});


gulp.task('run', function() {
    const connect = require('gulp-connect');
    connect.server({
        root: 'dist',
        livereload: true
    });
});


gulp.task('version', function() {
    const semver = require('semver');

    console.log("Checking node version: .");

    let packageJson = require("./package.json");
    const expectedVersion = packageJson.engines.node;
    let actualVersion = process.version;

    if (semver.neq(expectedVersion,actualVersion)){
        console.log("Incorrect node version. expected " + expectedVersion + ". Actual: " + actualVersion);
        process.exit(1);
    }
});