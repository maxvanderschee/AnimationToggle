/*! ClassToggle.js - v1.0 - 2017-09-29
* https://github.com/mvdschee/ClassToggle.js
* Copyright (c) 2017 Max van der Schee; Licensed MIT */
window.onload = function () {
    var trigger = new Trigger();
    trigger.findTrigger();
};
var Trigger = (function () {
    function Trigger() {
    }
    Trigger.prototype.findTrigger = function () {
        var toggle = new Toggle();
        this.list = document.querySelectorAll("[id$='_trigger']");
        var _loop_1 = function (i) {
            this_1.number = parseInt(this_1.list[i].id);
            var animatable = "animatable_" + this_1.number;
            document.getElementById(this_1.list[i].id).addEventListener('click', function () { toggle.toggleAnimatable(animatable); }, false);
        };
        var this_1 = this;
        for (var i = 0; i < this.list.length; i++) {
            _loop_1(i);
        }
    };
    return Trigger;
}());
var Toggle = (function () {
    function Toggle() {
    }
    Toggle.prototype.toggleAnimatable = function (animatable) {
        this.loopList = document.querySelectorAll("." + animatable);
        for (var i = 0; i < this.loopList.length; i++) {
            if (this.loopList[i].classList.contains("show")) {
                document.getElementsByClassName(animatable)[i].classList.remove("show");
            }
            else {
                document.getElementsByClassName(animatable)[i].classList.add("show");
            }
        }
    };
    return Toggle;
}());
