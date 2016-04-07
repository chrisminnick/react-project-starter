/**
 * Created by chris on 4/3/16.
 */
(() => {
    "use strict";

    exports.toggle = function toggle(element){

        var onMessage = element.getAttribute("onMessage");
        var offMessage = element.getAttribute("offMessage");
        var buttonText = element.innerHTML;

        if (buttonText === onMessage) {
            element.innerHTML = offMessage;
        } else {
            element.innerHTML = onMessage;
        }
    };

})();