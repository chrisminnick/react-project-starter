/**
 * Created by chris on 3/20/16.
 */

"use strict";
import * as addition from '../src/addition';
describe("Addition", function() {
    it("adds positive numbers", function() {
        expect(addition.add(2,3)).toBe(5);
    });
});

