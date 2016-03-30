(function() {
    "use strict";

    function sayHello(name) {
        if (name) {
            return "Hello, " + name;
        } else {
            return "Hello";
        }
    }

    describe("Say Hello", function() {
        it("concats Hello and a name", function() {
            let actual = sayHello("World");
            let expected = "Hello, World";
            expect(actual).toEqual(expected);
        });
        it("handles undefined argument", function() {
            let actual = sayHello();
            let expected = "Hello";
            expect(actual).toEqual(expected);
        });
    });

})();