/**
 * Created by chris on 3/20/16.
 */
(() => {
"use strict";

    describe("Addition", function() {
        it("adds positive numbers", function() {
            expect(add(2,3)).toBe(5);
        });
    });


    function add(a,b) {
        return a + b;
    }

})();