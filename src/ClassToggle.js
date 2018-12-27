/*! ClassToggle.js - v0.1.0 - 2018-dec-27
* https://github.com/mvdschee/ClassToggle.js
* Copyright (c) 2018 Max van der Schee; Licensed MIT */
var Trigger = /** @class */ (function () {
    function Trigger() {
    }
    Trigger.prototype.findTrigger = function () {
        var toggle = new Toggle();
        this.list = document.querySelectorAll("[data-tr]");
        this.list.forEach(function (el) {
            var numbers = el.dataset.tr.split(" ");
            el.addEventListener('click', function () { toggle.toggleExecute(numbers); }, false);
        });
    };
    return Trigger;
}());
var Toggle = /** @class */ (function () {
    function Toggle() {
    }
    Toggle.prototype.toggleExecute = function (numbers) {
        var _this = this;
        this.list = document.querySelectorAll("[data-ex]");
        numbers.forEach(function (number) {
            _this.list.forEach(function (item) {
                var itemNumbers = item.dataset.ex.split(" ");
                itemNumbers.forEach(function (itemNumber) {
                    if (itemNumber === number) {
                        if (item.classList.contains("active")) {
                            item.classList.remove("active");
                            item.classList.add("inactive");
                        }
                        else {
                            item.classList.add("active");
                            item.classList.remove("inactive");
                        }
                    }
                });
            });
        });
    };
    return Toggle;
}());