/*! ClassToggle.js - v0.1.0 - 2018-dec-27
* https://github.com/mvdschee/ClassToggle.js
* Copyright (c) 2018 Max van der Schee; Licensed MIT */

class Trigger {
  list: NodeListOf<HTMLElement>;

  findTrigger(){
    let toggle = new Toggle();
    this.list = document.querySelectorAll("[data-tr]");

    this.list.forEach(el => {
      let numbers: string[] = el.dataset.tr.split(" ");
      el.addEventListener('click', () => { toggle.toggleExecute(numbers) }, false);
    });
  }
}

class Toggle {
  list: NodeListOf<HTMLElement>;

  toggleExecute(numbers: string[]) {
    this.list = document.querySelectorAll("[data-ex]");

    numbers.forEach(number => {
      this.list.forEach(item => {
        let itemNumbers: string[] = item.dataset.ex.split(" ");
        itemNumbers.forEach(itemNumber => {
          if (itemNumber === number) {
            if (item.classList.contains("active")) {
              item.classList.remove("active");
              item.classList.add("inactive");
            } else {
              item.classList.add("active");
              item.classList.remove("inactive");
            }
          }
        });
      });
    });
  }
}
