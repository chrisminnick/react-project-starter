/**
 * Created by chris on 3/20/16.
 */
(function() {
"use strict";
//import * as addition from '../src/addition';
var addition = require("../src/addition.js");

describe("Addition", function() {
    it("adds positive numbers", function() {
        expect(addition.add(2,3)).toBe(5);
    });
});

})();

