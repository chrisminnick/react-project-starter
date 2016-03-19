(function() {
    "use strict";

    var EXPECTED_NODE_VERSION = "v4.2.3";

    var gulp = require('gulp');

    gulp.task('default', [ "version" ], function() {

        console.log('\n\nBUILD OK');
    });

    gulp.task('version', function() {
        console.log("Checking node version.");
        var actualVersion = process.version;

        if (actualVersion !== EXPECTED_NODE_VERSION){
            console.log("Incorrect node version. expected " + EXPECTED_NODE_VERSION + ". Actual: " + actualVersion);
            process.exit(1);
        }
    });

}());

