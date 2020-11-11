"use strict"

const { Builder, By, until } = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')
const chromedriver = require('chromedriver')
const fs = require('fs')

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build())

module.exports = {
  async run() {
    const driver = await new Builder().forBrowser('chrome').setChromeOptions({

    }).build()
    try {
      let name = `./screenshot/baidu/${Date.now()}`
      await driver.get('https://www.baidu.com/')
      await driver.takeScreenshot().then(res => {
        fs.writeFileSync(`${name}-1.jpg`, res, 'base64')
      })
      await driver.findElement(By.id('kw')).sendKeys('webdriver')
      await driver.findElement(By.id('su')).click()
      await driver.sleep(1000)
      await driver.takeScreenshot().then(res => {
        fs.writeFileSync(`${name}-2.jpg`, res, 'base64')
      })
      await driver.wait(until.titleIs('webdriver - 百度搜索'), 1000)
    } finally {
      await driver.quit()
    }
  }
}