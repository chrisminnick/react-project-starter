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
            var onMessage = "on";
            var offMessage = "off";
            myButton.setAttribute("onMessage",onMessage);
            myButton.setAttribute("offMessage",offMessage);

            container.appendChild(myButton);

            toggleButton.toggle(myButton);

            var buttonText = myButton.innerHTML;

            expect(buttonText).toEqual(onMessage);

        });

        it ("toggles between two messages", function() {
            var myButton = document.createElement("button");
            var onMessage = "on";
            var offMessage = "off";
            myButton.setAttribute("onMessage",onMessage);
            myButton.setAttribute("offMessage",offMessage);

            container.appendChild(myButton);

            var buttonText;

            toggleButton.toggle(myButton);
            buttonText = myButton.innerHTML;
            expect(buttonText).toEqual(onMessage);

            toggleButton.toggle(myButton);
            buttonText = myButton.innerHTML;
            expect(buttonText).toEqual(offMessage);

            toggleButton.toggle(myButton);
            buttonText = myButton.innerHTML;
            expect(buttonText).toEqual(onMessage);

        });


    });

    function removeElement(element) {
        element.parentNode.removeChild(element);
    }

})();