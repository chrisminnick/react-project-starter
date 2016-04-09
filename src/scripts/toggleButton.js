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
            element.innerHTML = offMessage;
            element.className =
                element.className.replace( /(?:^|\s)active(?!\S)/g , '' );
        } else {
            element.innerHTML = onMessage;
            element.className += " " + activeClass;

        }

        function addClass() {
            //TODO
        }

        function removeClass() {
            //TODO
        }
    };

})();