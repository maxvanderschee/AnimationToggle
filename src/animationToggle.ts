window.onload = () => {
    let trigger = new Trigger();
    trigger.findTrigger();
}

class Trigger {
  list: any;
  id: string;
  number: number;
  animatable: string;


  findTrigger(){
    let toggle = new Toggle();
    this.list = document.querySelectorAll("[id$='_trigger']");

    for (let i = 0; i < this.list.length; i++) {
      this.number = parseInt(this.list[i].id);
      let animatable = "animatable_" + this.number
      document.getElementById(this.list[i].id).addEventListener('click', () => {toggle.toggleAnimatable(animatable)}, false);
    }
  }
}

class Toggle {
  loopList: any;

  toggleAnimatable(animatable: string) {
    this.loopList = document.querySelectorAll("." + animatable);

    for (let i = 0; i < this.loopList.length; i++) {
      if (this.loopList[i].classList.contains("show")) {
        document.getElementsByClassName(animatable)[i].classList.remove("show");
      } else {
        document.getElementsByClassName(animatable)[i].classList.add("show");
      }
    }
  }
}
