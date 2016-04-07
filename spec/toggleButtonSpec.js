(function() {
    "use strict";

    var toggleButton = require("../src/scripts/toggleButton.js");
    describe("toggleButton", function() {
        var container;

        beforeEach(function(){
            container = document.createElement("div");
            document.body.appendChild(container);
        });

        afterEach(function(){
            removeElement(container);

        });

        it("changes the text on a button", function() {
            var myButton = document.createElement("button");
            var toggledText = "Toggled.";
            container.appendChild(myButton);

            toggleButton.toggle(myButton,toggledText);

            var buttonText = myButton.innerHTML;

            expect(buttonText).toEqual(toggledText);

        });

        it ("toggles between two messages", function() {
            var myButton = document.createElement("button");
            container.appendChild(myButton);

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

        });


    });

    function removeElement(element) {
        element.parentNode.removeChild(element);
    }

})();