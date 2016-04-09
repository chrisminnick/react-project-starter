/**
 * Created by chrisjminnick on 3/30/16.
 */
(function() {
    "use strict";
    var toggleButton = require("./toggleButton.js");

    document.addEventListener("DOMContentLoaded",function(){
        toggleButton.initialize(document.getElementById("theButton"));
    });




})();