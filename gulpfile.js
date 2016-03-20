(function() {
    "use strict";


    var gulp = require('gulp');
    var semver = require('semver');

    gulp.task('default', [ "version", "lint" ], function() {

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

        gulp.exec
    });

}());