# ClassToggle.js

A light ~0.5kb and simple class toggle in pure JS with no dependencies.

**ClassToggle.js**
- Toggle classes with pure JavaScript.
- Is a light-weight library, just **466 bytes** minified & gzipped.
- No dependencies.

ClassToggle.js is written with the aim to be as light and reusable as possible.
For a robust code base ClassToggle.js is written in Typescript and compiled to JavaScript.


### Install

Download the minified library: [ClassToggle.min.js.](https://raw.githubusercontent.com/mvdschee/ClassToggle.js/master/src/ClassToggle.min.js)

```html
<script type="text/javascript" src="assets/js/ClassToggle.min.js"></script>
```

### Usage

In HTML, add an identifier to the element that should be a trigger:

```html
<button id="trigger_1">click me!</button>
```
The number represent the group that should be toggled.

For the elements that will receive the "active" class, add an identifier like:

```html
<div class="execute_1"></div>
```

Match-up the **[numbers]** from the **trigger** with that of your **execute** class.

All you need to do now is just instantiate ClassToggle as follows:

```js
var trigger = new Trigger();
trigger.findTrigger();
```

### Example
[Demo on Codepen.](https://codepen.io/motion_max/pen/ZXyRLW)


### Changelog
See the [Changelog.](https://github.com/mvdschee/ClassToggle.js/wiki/Changelog)
