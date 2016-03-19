(function() {
    "use strict";


    var gulp = require('gulp');
    var semver = require('semver');

    gulp.task('default', [ "version" ], function() {

        console.log('\n\nBUILD OK');
    });

    gulp.task('version', function() {
        console.log("Checking node version.");

        let packageJson = require("./package.json");

        let expectedVersion = packageJson.engines.node;

        let actualVersion = process.version;

        if (semver.neq(expectedVersion,actualVersion)){
            console.log("Incorrect node version. expected " + expectedVersion + ". Actual: " + actualVersion);
            process.exit(1);
        }
    });

}());

