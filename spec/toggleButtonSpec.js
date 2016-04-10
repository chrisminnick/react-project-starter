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

        it("toggles button when clicked", function() {
            var myButton = document.createElement("button");
            var onMessage = "on";
            var offMessage = "off";
            myButton.setAttribute("onMessage",onMessage);
            myButton.setAttribute("offMessage",offMessage);

            container.appendChild(myButton);
            toggleButton.initialize(myButton);


            myButton.click(myButton);

            var buttonText = myButton.innerHTML;

            expect(buttonText).toEqual(onMessage);
        });

        it("changes the text on a button", function() {
            var myButton = document.createElement("button");
            var onMessage = "on";
            var offMessage = "off";
            myButton.setAttribute("onMessage",onMessage);
            myButton.setAttribute("offMessage",offMessage);

            container.appendChild(myButton);

            toggleButton.initialize(myButton);
            myButton.click();

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

            toggleButton.initialize(myButton);

            myButton.click();
            buttonText = myButton.innerHTML;
            expect(buttonText).toEqual(onMessage, "switch on");

            myButton.click();
            buttonText = myButton.innerHTML;
            expect(buttonText).toEqual(offMessage, "switch off");

            myButton.click();
            buttonText = myButton.innerHTML;
            expect(buttonText).toEqual(onMessage, "switch on");

        });

        it ("uses default messages when none are provided to it", function() {
            var myButton = document.createElement("button");
            var onMessage = "on";
            var offMessage = "off";

            container.appendChild(myButton);

            var buttonText;

            toggleButton.initialize(myButton);

            myButton.click();
            buttonText = myButton.innerHTML;
            expect(buttonText).toEqual(onMessage, "switch on");

            myButton.click();
            buttonText = myButton.innerHTML;
            expect(buttonText).toEqual(offMessage, "switch off");

            myButton.click();
            buttonText = myButton.innerHTML;
            expect(buttonText).toEqual(onMessage, "switch on");


        });

        it ("sets a class when its active", function() {
            var myButton = document.createElement("button");
            var onMessage = "on";
            var offMessage = "off";
            var activeClass = "active";

            myButton.setAttribute("onMessage",onMessage);
            myButton.setAttribute("offMessage",offMessage);
            myButton.setAttribute("class","");

            toggleButton.initialize(myButton);

            myButton.click();

            var allClasses = myButton.getAttribute('class');
            var hasClass = allClasses.split(' ').indexOf(activeClass) !== -1;


            expect(hasClass).toBeTruthy();


        });

        it ("removes the active class when inactive", function() {
            var myButton = document.createElement("button");
            var onMessage = "on";
            var offMessage = "off";
            var activeClass = "active";

            myButton.setAttribute("onMessage",onMessage);
            myButton.setAttribute("offMessage",offMessage);
            myButton.setAttribute("class","");

            toggleButton.initialize(myButton);

            //toggle twice to get back to inactive
            myButton.click();
            myButton.click();

            var allClasses = myButton.getAttribute('class');
            var hasClass = allClasses.split(' ').indexOf(activeClass) === -1;


            expect(hasClass).toBeTruthy();

        });

        it ("uses an attribute to specify whether on or off is its default state", function() {


        });
    });



    function removeElement(element) {
        element.parentNode.removeChild(element);
    }

})();