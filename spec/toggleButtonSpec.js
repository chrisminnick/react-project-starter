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

    it ("sets a class when its active", function() {
        var myButton = document.createElement("button");
        var onMessage = "on";
        var offMessage = "off";
        var activeClass = "active";

        myButton.setAttribute("onMessage",onMessage);
        myButton.setAttribute("offMessage",offMessage);
        myButton.setAttribute("class","");
        toggleButton.toggle(myButton);

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

        //toggle twice to get back to inactive
        toggleButton.toggle(myButton);
        toggleButton.toggle(myButton);

        var allClasses = myButton.getAttribute('class');
        var hasClass = allClasses.split(' ').indexOf(activeClass) === -1;


        expect(hasClass).toBeTruthy();

    })

    it ("uses an attribute to specify whether on or off is its default state", function() {


    });

    function removeElement(element) {
        element.parentNode.removeChild(element);
    }

})();