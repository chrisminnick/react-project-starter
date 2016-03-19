(function() {
    "use strict";

    var EXPECTED_NODE_VERSION = "v4.2.2";

    var gulp = require('gulp');
    var fail   = require('gulp-fail');
    var gulpIf = require('gulp-if');

    gulp.task('default', function() {

        console.log('\n\nBUILD OK');
    });

    gulp.task('version', function() {
        var actualVersion = process.version;
        var condition = actualVersion !== EXPECTED_NODE_VERSION;
        if (condition){
            console.log("Incorrect node version. expected " + EXPECTED_NODE_VERSION + ". Actual: " + actualVersion);
            process.exit(1);
        }

    });

}());

