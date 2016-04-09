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
            element.classList.add(activeClass);
        }

        function turnOff(){
            element.innerHTML = offMessage;
            element.classList.remove(activeClass);
        }
    };

})();