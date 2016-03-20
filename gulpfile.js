(function() {
    "use strict";


    var gulp = require('gulp');
    var semver = require('semver');
    var jshint = require('gulp-jshint');


    gulp.task('default', [ "version", "lint" ], function() {
        //gulp.watch('./js/*.js',['jshint']);

        console.log('\n\nBUILD OK');
    });

    gulp.task('version', function() {
        console.log("Checking node version.");

        let packageJson = require("./package.json");
        const expectedVersion = packageJson.engines.node;
        let actualVersion = process.version;

        if (semver.neq(expectedVersion,actualVersion)){
            console.log("Incorrect node version. expected " + expectedVersion + ". Actual: " + actualVersion);
            process.exit(1);
        }
    });

    gulp.task('lint', function() {
        console.log("Linting JavaScript.");
        return gulp.src('gulpfile.js')
            .pipe(jshint({
                esversion: 6
            }))
            .pipe(jshint.reporter('default'))
            .pipe(jshint.reporter('fail'));

    });

}());