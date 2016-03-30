/**
 * Created by chrisjminnick on 3/30/16.
 */
(function() {
    "use strict";

    let greet = (name) => {
        if (name) {
            return "Hello, " + name;
        } else {
            return "Hello";
        }
    };

    exports.greet = greet;
})();