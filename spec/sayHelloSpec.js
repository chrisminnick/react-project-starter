(function() {
    "use strict";

    var sayHello = require("../src/scripts/sayHello.js");

    describe("Greet", function() {
        it("concats Hello and a name", function() {
            let actual = sayHello.greet("World");
            let expected = "Hello, World";
            expect(actual).toEqual(expected);
        });
        it("handles undefined argument", function() {
            let actual = sayHello.greet();
            let expected = "Hello";
            expect(actual).toEqual(expected);
        });
    });

})();