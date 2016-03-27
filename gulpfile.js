(function() {
"use strict";

    const gulp = require('gulp');
    const gutil = require('gulp-util');
    const semver = require('semver');
    const jshint = require('gulp-jshint');
    const karma = require("gulp-karma-runner");
    const webpack = require('gulp-webpack');
    const runSequence = require('run-sequence');
    const babel = require('gulp-babel');


    // General purpose tasks
    gulp.task('webpack', function() {
        return gulp.src('src/app.js')
            .pipe(webpack( require('./webpack.config.js') ))
            .pipe(gulp.dest('dist'));
    });

    gulp.task('babel', function() {

        return gulp.src(['spec/*.js','src/**/*.js'],{base: "."})
            .pipe(babel({
                presets: ['es2015']
            }))
            .pipe(gulp.dest('dist'));
    });

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



    gulp.task('default', ["version","lint","test"], function() {
            return gutil.log('\n\nBUILD OK');
    });

    gulp.task("run", [ "build" ], function() {
        const webserver = require('gulp-webserver');

        console.log("Run a localhost server.");
        gulp.src('dist')
            .pipe(webserver({
                livereload: true,
                open: true
            }));
    });

    // Supporting tasks

    gulp.task('version', function() {
        console.log("Checking node version: .");

        let packageJson = require("./package.json");
        const expectedVersion = packageJson.engines.node;
        let actualVersion = process.version;

        if (semver.neq(expectedVersion,actualVersion)){
            console.log("Incorrect node version. expected " + expectedVersion + ". Actual: " + actualVersion);
            process.exit(1);
        }
    });

    gulp.task('lint', function() {
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
        gulp.src([
            "spec/**/*.js",
            "src/**/*.js"
        ], {"read": false}).pipe(
            karma.runner({
                configFile: __dirname + '/karma.conf.js',
                "singleRun": false
            })
        );
    });

    gulp.task("build", ["webpack"], function() {
        console.log("creating dist directory.");

    });



})();