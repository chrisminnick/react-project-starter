/**
 * Created by chris on 4/3/16.
 */
(() => {
    "use strict";

    exports.toggle = function toggle(element){

        var onMessage = element.getAttribute("onMessage");
        var offMessage = element.getAttribute("offMessage");

        var activeClass = "active";
        var buttonText = element.innerHTML;

        if (buttonText === onMessage) {
            turnOff(element);

        } else {
            turnOn(element);
        }

        function turnOn(){
            element.innerHTML = onMessage;
            element.className += " " + activeClass;
        }

        function turnOff(){
            var str1 = activeClass;

            element.innerHTML = offMessage;

            var re = new RegExp(str1, "g");
            element.className = element.className.replace(re, "regex");
        }
    };

})();