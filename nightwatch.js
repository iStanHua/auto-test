"use strict"


module.exports = {
  url: 'https://baidu.com',
  commands: [{
    submit() {
      this.waitForElementVisible('@submitButton', 1000)
        .click('@submitButton')
        .api.pause(1000)

      return this
    }
  }],
  elements: {
    searchBar: { selector: 'input[name=q]' },
    submitButton: { selector: 'input[value="Google Search"]' }
  }
};