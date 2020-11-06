// src/loadspeed.js

"use strict";

const page = require('webpage').create()
const system = require('system')
let t
let address

if (system.args.length === 1) {
  console.log('Usage: loadspeed.js <some URL>')
  phantom.exit(1)
} else {
  t = Date.now()
  address = system.args[1]
  page.open(address, function (status) {
    if (status !== 'success') {
      console.log('FAIL to load the address')
    } else {
      t = Date.now() - t;
      console.log('Page title is ' + page.evaluate(function () {
        return document.title
      }));
      console.log('Loading time ' + t + ' msec')
    }
    phantom.exit()
  })
}
