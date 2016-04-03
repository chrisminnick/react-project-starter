(function() {
    "use strict";

    var toggleButton = require("../src/scripts/toggleButton.js");
    describe("toggleButton", function() {

        it("changes the text on a button", function() {
            var myButton = document.createElement("button");
            document.body.appendChild(myButton);
            toggleButton.toggle(myButton,"test");
            var buttonText = myButton.innerHTML;
            expect(buttonText).toEqual("test");
        })

    });

})();