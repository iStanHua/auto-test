"use strict"

const Selenium = require('./selenium')

class App {
  constructor() {

  }

  selenium() {
    Selenium.run()
  }
}

const app = new App()

app.selenium()