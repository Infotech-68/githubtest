const { browser } = require("protractor")

exports.config = {
  // framework: 'jasmine',
  directConnect: 'true',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['Task1.js'],
  capabilities: {
    browserName: 'chrome',
    onPrepare:() => {
      browser.manage().window().maximize();
    }
  }
}