/**
 * Created by chris on 4/3/16.
 */
(() => {
    "use strict";

    exports.toggle = function toggle(element,toggledText){
        var originalText;
        var toggled;
        if (toggled===1) {
            toggled = 0;
            element.innerHTML = originalText;
        } else {
            originalText = element.innerHTML;
            element.innerHTML = toggledText;
            toggled = 1;
        }
    };

})();