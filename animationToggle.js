//A small class toggle in javascript for animations in css.
//Made by Max van der Schee

//------ VARIABLES ------

//Here should go the names of the ID's of any element you want to be the input.
var triggers = ["Hamburger", "Black-filter"];

//Here should go alle the names of the ID's that you would like to be animated, make sure you cluster them.
//Example: animations for an hamburger menu are the first 3 ID's, after that are 3 others for an other animation etc..
var animatable = ["Hamburger", "Navigation", "Black-filter", "Black-filter-1", "Black-filter-2", "Black-filter-3", "Black-filter-4"];

//The classes that will be added and removed.
var openClass = "open";
var closedClass = "closed";

var isOpen = true;


//------ TRIGGERS ------

//Here you should tell which trigger should activate which function.
document.getElementById(triggers[0]).addEventListener('click', triggerMenu, false);
document.getElementById(triggers[1]).addEventListener('click', triggerAll, false);

//Here you define which cluster you want to animate by which trigger.
//First number is were it should start and second number is were it should end.
function triggerMenu() {
  animation(0, 2);
}
function triggerAll() {
  animation(3, 6);
}


//----- TOGGLE FUNCTION -------

//here happens the magic. you shouldn't change anything here.
function animation(start, end) {
  if (isOpen) {
    for (i = start; i < animatable.length; i++) {
      document.getElementById(animatable[i]).classList.add(openClass);
      document.getElementById(animatable[i]).classList.remove(closedClass);
      if (i === end) { break; }
    }
  } else {
    for (i = start; i < animatable.length; i++) {
      document.getElementById(animatable[i]).classList.add(closedClass);
      document.getElementById(animatable[i]).classList.remove(openClass);
      if (i === end) { break; }
    }
  }
  isOpen = !isOpen;
}
