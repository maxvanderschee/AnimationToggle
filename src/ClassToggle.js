/*! ClassToggle.js - v0.0.3 - 2017-09-29
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
            var execute = "execute_" + this_1.number;
            document.getElementById(this_1.list[i].id).addEventListener('click', function () { toggle.toggleExecute(execute); }, false);
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
    Toggle.prototype.toggleExecute = function (execute) {
        this.loopList = document.querySelectorAll("." + execute);
        for (var i = 0; i < this.loopList.length; i++) {
            if (this.loopList[i].classList.contains("active")) {
                document.getElementsByClassName(execute)[i].classList.remove("active");
            }
            else {
                document.getElementsByClassName(execute)[i].classList.add("active");
            }
        }
    };
    return Toggle;
}());
