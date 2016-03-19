(function() {
    "use strict";

    var EXPECTED_NODE_VERSION = "v4.2.3";

    var gulp = require('gulp');
    var fail   = require('gulp-fail');
    var gulpIf = require('gulp-if');

    gulp.task('default', function() {

        console.log('\n\nBUILD OK');
    });

    gulp.task('version', function() {
        console.log("Checking node version: ");
        console.log("expected version: " + EXPECTED_NODE_VERSION);
        var actualVersion = process.version;
        var condition = actualVersion !== EXPECTED_NODE_VERSION;
        console.log("actual version: " + actualVersion);
        if (condition){
            console.log("Node version doesn't match.");
            process.exit(1);
        }

    });

}());

