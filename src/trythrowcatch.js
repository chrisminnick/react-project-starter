(function() {
    "use strict";

    function hello(name) {
        return "Hello, " + name;
    }

    let result = hello("World");
    let expected = "Hello, World!";
    try {
        if (result !== expected) throw new Error("Expected " + expected + " but got " + result);
    } catch (err) {
        console.log(err);
    }
})();