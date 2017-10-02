/*! ClassToggle.js - v0.0.4 - 2017-10-02
* https://github.com/mvdschee/ClassToggle.js
* Copyright (c) 2017 Max van der Schee; Licensed MIT */

class Trigger {
  list: any;
  id: string;
  number: number;
  execute: string;

  findTrigger(){
    let toggle = new Toggle();
    this.list = document.querySelectorAll("[id^='trigger_']");

    for (let i = 0; i < this.list.length; i++) {
      this.number = this.list[i].id.slice(8);
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
        document.getElementsByClassName(execute)[i].classList.add("deactive");
      } else {
        document.getElementsByClassName(execute)[i].classList.add("active");
        document.getElementsByClassName(execute)[i].classList.remove("deactive");
      }
    }
  }
}
