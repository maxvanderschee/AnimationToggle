# ClassToggle.js

A light ~0.9kb and simple class toggle in pure JS with no dependencies.

**ClassToggle.js**
- Toggle classes with pure JavaScript.
- Is a light-weight library, just **901 bytes** minified & gzipped.
- No dependencies.

ClassToggle.js is written with the aim to be as light and reusable as possible.
For a robust code base ClassToggle.js is written in Typescript and compiled to JavaScript.


### Install

Download the minified library: [ClassToggle.min.js.](https://raw.githubusercontent.com/mvdschee/ClassToggle.js/master/src/ClassToggle.min.js)

Point to the script location in your project and set the script before your `main.js` file and after all web content.
```html
<body>
    <!-- Your content -->
    <script src="assets/js/ClassToggle.min.js"></script>
    <script src="assets/js/main.js"></script>
</body>
```

### Usage

In HTML give the element that you want to function as a **Trigger** a data attribute:

```html
<button data-tr="1">click me!</button>
```
The number represent the group that it should toggle it's status.
For the **Execute** elements that have the same number, it will set a class `active` or `inactive` on a click action.

```html
<div data-ex="1"></div>
```

Match-up the **number** from the `data-tr` with that of your `data-ex` and it will toggle those classes. 

You can have multiple numbers in a **Trigger** element and also in a **Execute** element:
```html
<button data-tr="1 2 3 4 70"></button>

<div data-ex="1 2 3 4 70"></div>
```
Make sure there is a `whitespace` between the numbers!

All you need to do now is just initiate the ClassToggle script with the following snippet in your `main.js` file:

```js
var trigger = new Trigger();
trigger.findTrigger();
```

### Example
[Demo on Codepen.](https://codepen.io/motion_max/pen/ZXyRLW)


### Changelog
See the [Changelog.](https://github.com/mvdschee/ClassToggle.js/wiki/Changelog)
