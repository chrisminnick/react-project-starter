(function() {
    "use strict";
    import {hello} from 'hello';

    describe("Hello", function() {
        it("concats Hello and a name", function() {
            let actual = hello("World");
            let expected = "Hello, World";
            expect(actual).toEqual(expected);
        });
        it("handles undefined argument", function() {
            let actual = hello();
            let expected = "Hello";
            expect(actual).toEqual(expected);
        });
    });

})();