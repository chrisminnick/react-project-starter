(function() {
    "use strict";

    var toggleButton = require("../src/scripts/toggleButton.js");
    describe("toggleButton", function() {

        it("changes the text on a button", function() {
            var myButton = document.createElement("button");
            var toggledText = "Toggled.";
            document.body.appendChild(myButton);

            toggleButton.toggle(myButton,toggledText);

            var buttonText = myButton.innerHTML;

            expect(buttonText).toEqual(toggledText);

            removeElement(myButton);

        });

        it ("toggles between two messages", function() {
            var myButton = document.createElement("button");
            document.body.appendChild(myButton);

            var originalMessage = "Toggle me.";
            var toggledMessage = "Toggled.";

            toggleButton.toggle(myButton,toggledMessage);

            var buttonText = myButton.innerHTML;
            expect(buttonText).toEqual(toggledMessage);

            toggleButton.toggle(myButton,toggledMessage);

            var buttonText = myButton.innerHTML;
            expect(buttonText).toEqual(originalMessage);

            toggleButton.toggle(myButton,toggledMessage);

            var buttonText = myButton.innerHTML;
            expect(buttonText).toEqual(toggledMessage);

            //removeElement(myButton);

        });


    });

    function removeElement(element) {
        element.parentNode.removeChild(element);
    }

})();