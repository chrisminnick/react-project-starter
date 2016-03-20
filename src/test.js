/**
 * Created by chris on 3/20/16.
 */
(() => {
"use strict";

    var jasmine = require("jasmine");

    assert.equal(add(3,4), 7);

    var result = add(3,4);
    var expected = 7;

    if (result !== expected){
        throw new Error("Expected " + expected + ", but got " + result);
    }

    function add(a,b) {
        return a + b;
    }

})();