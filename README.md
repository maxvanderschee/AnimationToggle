# classToggle.js

A lightweight and simple class toggle in JavaScript with no dependencies.

**classToggle.js**
- Toggle classes with JavaScript.
- Is a light-weight library, just **1.71 KiB** minified & gzipped.
- No dependencies.

classToggle.js is written to be as light and reusable as possible.
For a robust code base, classToggle.js is written in Typescript and compiled to ES5 JavaScript.

### Install

Download the minified library: [classToggle.js.](https://raw.githubusercontent.com/mvdschee/classToggle.js/master/src/classToggle.js)

Point to the script location in your project and after all web content.
```html
<body>
    <!-- Your content -->
    <script src="assets/js/classToggle.js"></script>
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

You're not limited by the use of `numbers` single words work too! So it might be easy to distinguish curtain toggle groups.

The script is self-containing so it will execute itself.

### Example
[Demo on Codepen.](https://codepen.io/motion_max/pen/ZXyRLW)


### Changelog
See the [Changelog.](https://github.com/mvdschee/classToggle.js/wiki/Changelog)
