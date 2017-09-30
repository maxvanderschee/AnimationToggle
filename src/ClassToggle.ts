/*! ClassToggle.js - v0.0.3 - 2017-09-30
* https://github.com/mvdschee/ClassToggle.js
* Copyright (c) 2017 Max van der Schee; Licensed MIT */
window.onload = () => {
    let trigger = new Trigger();
    trigger.findTrigger();
}

class Trigger {
  list: any;
  id: string;
  number: number;
  execute: string;


  findTrigger(){
    let toggle = new Toggle();
    this.list = document.querySelectorAll("[id$='_trigger']");

    for (let i = 0; i < this.list.length; i++) {
      this.number = parseInt(this.list[i].id);
      let execute = "execute_" + this.number
      document.getElementById(this.list[i].id).addEventListener('click', () => {toggle.toggleExecute(execute)}, false);
    }
  }
}

class Toggle {
  loopList: any;

  toggleExecute(execute: string) {
    this.loopList = document.querySelectorAll("." + execute);

    for (let i = 0; i < this.loopList.length; i++) {
      if (this.loopList[i].classList.contains("active")) {
        document.getElementsByClassName(execute)[i].classList.remove("active");
      } else {
        document.getElementsByClassName(execute)[i].classList.add("active");
      }
    }
  }
}
