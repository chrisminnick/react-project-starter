/**
 * Created by chris on 3/20/16.
 */

"use strict";

var _addition = require("../src/addition");

var addition = _interopRequireWildcard(_addition);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

describe("Addition", function () {
    it("adds positive numbers", function () {
        expect(addition.add(2, 3)).toBe(5);
    });
});