(() => {
"use strict";

    let gulp = require('gulp');
    let semver = require('semver');
    let jshint = require('gulp-jshint');


    gulp.task('default', [ "version", "lint" ], function() {
        //gulp.watch('./js/*.js',['jshint']);

        console.log('\n\nBUILD OK');
    });

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
        return gulp.src('gulpfile.js')
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
                undef: true, // variables must be defined
                // set environments
                node: true,
                browser: true,
                globals: []
            }))
            .pipe(jshint.reporter('default'))
            .pipe(jshint.reporter('fail'));

    });

})();