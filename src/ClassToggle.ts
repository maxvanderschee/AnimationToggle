/*! ClassToggle.js - v0.0.5 - 2017-10-07
* https://github.com/mvdschee/ClassToggle.js
* Copyright (c) 2017 Max van der Schee; Licensed MIT */

class Trigger {
  list: NodeListOf<Element>;
  id: string;
  number: number;
  execute: string;

  findTrigger(){
    let toggle = new Toggle();
    this.list = document.querySelectorAll("[class^='trigger_']");

    for (let i = 0; i < this.list.length; i++) {
      this.number = parseInt(this.list[i].classList[0].slice(8));
      let execute = "execute_" + this.number;

      let executeList: HTMLCollectionOf<Element> = document.getElementsByClassName(this.list[i].classList[0]);
      for(let j = 0; j < executeList.length; j++) {
        executeList[j].addEventListener('click', () => {toggle.toggleExecute(execute)}, false);
      }
    }
  }
}

class Toggle {
  loopList: NodeListOf<Element>;

  toggleExecute(execute: string) {
    this.loopList = document.querySelectorAll("." + execute);

    for (let i = 0; i < this.loopList.length; i++) {
      if (this.loopList[i].classList.contains("active")) {
        document.getElementsByClassName(execute)[i].classList.remove("active");
        document.getElementsByClassName(execute)[i].classList.add("inactive");
      } else {
        document.getElementsByClassName(execute)[i].classList.add("active");
        document.getElementsByClassName(execute)[i].classList.remove("inactive");
      }
    }
  }
}
