# Timer for Pomodoro Technique built on Vue.js 2.0 with PWA

Built using Vue.js 2.0 with PWA (Progressive Web Apps) and Bootstrap 4.

<p align="center">
  <a href="https://pomodoro-timer.github.io" target="_blank">
    <img src="https://github.com/ijklim/pomodoro/blob/master/static/img/screenshot.jpg" width="990px">
    <br>
    Live Demo
  </a>
</p>

## Technologies/Modules used

* Vue.js 2.0
* Vue Router
* Vuex
* Bootstrap 4 Beta 2 (css only)
* Bootstrap Vue

## Features

* 25 minutes Pomodoro interval
* 5 minutes Short Break interval
* 20 minutes Long Break interval
* Different timer text color during break time
* Toggle Sound
* Toggle Autostart Next Interval
* Intervals completed log
* Responsive

## Usage Tip

To open this app in a small window on a desktop machine, type the following into the browser address bar or create a bookmark:<br>
**javascript:window.open('https://pomodoro-timer.github.io', 'pomodoro', 'height=350,width=400')**

Note #1: Sometimes browser will skip the front **javascript:** during paste, type this in manually if necessary.

Note #2: Some browsers might not support all the features if invoked this way. For example Microsoft Edge does not support window sizing.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
