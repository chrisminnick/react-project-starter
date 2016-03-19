(function() {
    "use strict";


    var gulp = require('gulp');

    gulp.task('default', [ "version" ], function() {

        console.log('\n\nBUILD OK');
    });

    gulp.task('version', function() {
        console.log("Checking node version.");

        let packageJson = require("./package.json");

        let expectedVersion = "v" + packageJson.engines.node;

        let actualVersion = process.version;

        if (actualVersion !== expectedVersion){
            console.log("Incorrect node version. expected " + expectedVersion + ". Actual: " + actualVersion);
            process.exit(1);
        }
    });

}());

