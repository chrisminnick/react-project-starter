/**
 * Created by chris on 4/3/16.
 */
(() => {
    "use strict";

    exports.toggle = function toggle(element,toggledText){
        var originalText;
        var toggled;
        var buttonText = element.innerHTML;

        if (buttonText === toggledText) {
            toggled = 0;
            element.innerHTML = "Toggle me.";
        } else {
            originalText = element.innerHTML;
            element.innerHTML = toggledText;
            toggled = 1;
        }
    };

})();