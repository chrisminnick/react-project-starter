(function() {
    "use strict";

    var toggleButton = require("../src/scripts/toggleButton.js");
    describe("toggleButton", function() {

        /*it("changes the text on a button", function() {
            var myButton = document.createElement("button");
            var toggledText = "Toggled.";
            document.body.appendChild(myButton);

            toggleButton.toggle(myButton,toggledText);

            var buttonText = myButton.innerHTML;

            expect(buttonText).toEqual(toggledText);

            removeElement(myButton);

        });*/
        it("alternates between two messages", function() {

            var myButton = document.createElement("button");
            var originalButtonText = "Toggle me.";
            var toggledText = "Toggled.";


            document.body.appendChild(myButton);
            myButton.innerHTML = originalButtonText;
            var buttonText = originalButtonText;


            toggleButton.toggle(myButton,toggledText);
            buttonText = myButton.innerHTML;

            expect(buttonText).toEqual(toggledText);

            toggleButton.toggle(myButton,toggledText);
            buttonText = myButton.innerHTML;

            expect(buttonText).toEqual(originalButtonText);

            removeElement(myButton);

        });

    });

    function removeElement(element) {
        element.parentNode.removeChild(element);
    }

})();