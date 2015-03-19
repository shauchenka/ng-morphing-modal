# Angular Morphing Modal
Angular directive for fullscreen modal window with wonderful animation in trending Material Design style. Responsive and mobile-ready. Works in modern browsers.

[Check Demo](https://dl.dropboxusercontent.com/u/60349134/ngm/example/index.html#)

## How it works
[![Angular Morphing Modal](http://habrastorage.org/files/e54/59d/5c9/e5459d5c9aeb445c8ed7c3f1fde489df.gif)](https://dl.dropboxusercontent.com/u/60349134/ngm/example/index.html#)

## Installation

#### Install with Bower
```shell
npm update -g bower
bower install ng-morphing-modal --save
```

#### Include Scripts
```html
<script src="bower_components/velocity/velocity.min.js"></script>
<script src="bower_components/ng-morphing-modal/build/js/ngMorphingModal.min.js"></script>
```

#### Declare Angular Dependency
```html
angular.module('your-app', ['ng-morphing-modal']);
```

#### Manual installation
Download contents of build/ folder from this repo, include .js files in your project. Velocity.js and Angular is required!

## Usage
Define launcher:
```html
<a href="#" class="btn" **ng-morphing-modal** content-selector="**cbc**" data-type="modal-trigger">
Fire Modal
</a>
```
And modal content markup:
```html
<div class="cd-modal" id="**cbc**">
    <div class="cd-modal-content">
    <!-- your modal content -->
    </div>
</div>
```


### Change list:
* ~~Bower package~~
* ~~Initial release~~
* Support for multiple DOM instances
* Add build script
* Refactoring sass for easy styling
* Content from JSON/XHR
* Extended mobile support

Please show your interest to this project with a stars, it can speed up development process!

### Support and credits
Based on idea from [this Pen](http://codepen.io/codyhouse/pen/vEVjJg)
Created and maintained for you by [TrackDuck](https://trackduck.com) - visual feedback and bug tracking with screenshots for web integrated with more than 15 project management systems.

[![TrackDuck](http://trackduck.github.io/attention-map/images/td.png)](https://trackduck.com)

If you have any questions/comments/recommendations drop us a line to: anton@trackduck.com
