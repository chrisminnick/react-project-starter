/**
 * Created by chris on 3/20/16.
 */
(() => {
"use strict";

    var assert = require("chai").assert;

    // basic addition
    assert.equal(add(3,4), 7);
    

    function add(a,b) {
        return a + b;
    }

})();