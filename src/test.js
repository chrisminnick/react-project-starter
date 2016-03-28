(function() {
    "use strict";

    function hello(name) {
        return "Hello, " + name;
    }

    describe("Hello", function() {
        it("concats Hello and a name", function() {
            let actual = hello("World");
            let expected = "Hello, World!";
            expect(actual).toEqual(expected);
        });
    });

})();