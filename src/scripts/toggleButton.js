/**
 * Created by chris on 4/3/16.
 */
    "use strict";

var activeClass = "active";
var onMessage = "on";
var offMessage = "off";

exports.initialize = function initialize(element){

    if (element.getAttribute("onMessage")){
        onMessage = element.getAttribute("onMessage");
    }
    if (element.getAttribute("offMessage")){
        offMessage = element.getAttribute("offMessage");
    }

    element.addEventListener("click", function(event){
        toggle(event.target);
    });
};

function toggle(element){
    var buttonText = element.innerHTML;
    if (buttonText === onMessage) {
        turnOff(element);

    } else {
        turnOn(element);
    }

}

function turnOn(element){
    element.innerHTML = onMessage;
    element.classList.add(activeClass);
}

function turnOff(element){
    element.innerHTML = offMessage;
    element.classList.remove(activeClass);
}


