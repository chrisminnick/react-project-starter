(function() {
    "use strict";


    var gulp = require('gulp');

    gulp.task('default', [ "version" ], function() {

        console.log('\n\nBUILD OK');
    });

    gulp.task('version', function() {
        console.log("Checking node version.");

        var packageJson = require("./package.json");

        var expectedVersion = "v" + packageJson.engines.node;

        var actualVersion = process.version;

        if (actualVersion !== expectedVersion){
            console.log("Incorrect node version. expected " + expectedVersion + ". Actual: " + actualVersion);
            process.exit(1);
        }
    });

}());

