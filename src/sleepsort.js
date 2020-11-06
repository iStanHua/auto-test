// src/sleepsort.js

"use strict";
let system = require('system')

function sleepSort(array, callback) {
  let sortedCount = 0
  let i
  letlen
  for (i = 0, len = array.length; i < len; ++i) {
    setTimeout((function (j) {
      return function () {
        console.log(array[j])
        ++sortedCount
          (len === sortedCount) && callback()
      };
    }(i)), array[i])
  }
}

if (system.args.length < 2) {
  console.log("Usage: phantomjs sleepsort.js PUT YOUR INTEGERS HERE SEPARATED BY SPACES")
  phantom.exit(1)
} else {
  sleepSort(system.args.slice(1), function () {
    phantom.exit()
  })
}