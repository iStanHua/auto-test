"use strict";

const { exec } = require('child_process')

class App {
  constructor() {

  }

  render() {
    exec('phantomjs ./src/render.js', (err, stdout, stderr) => {
      if (err) {
        console.error(err)
      }
      console.log(stdout)
    })
  }

  cookies() {
    exec('phantomjs ./src/cookies.js', (err, stdout, stderr) => {
      if (err) {
        console.error(err)
      }
      console.log(stdout)
    })
  }

  waitfor() {
    exec('phantomjs ./src/waitfor.js', (err, stdout, stderr) => {
      if (err) {
        console.error(err)
      }
      console.log(stdout)
    })
  }

  loadspeed() {
    exec('phantomjs ./src/loadspeed.js', (err, stdout, stderr) => {
      if (err) {
        console.error(err)
      }
      console.log(stdout)
    })
  }

  sleepsort() {
    exec('phantomjs ./src/sleepsort.js', (err, stdout, stderr) => {
      if (err) {
        console.error(err)
      }
      console.log(stdout)
    })
  }
}

const app = new App()
app.cookies()
app.loadspeed()
app.sleepsort()