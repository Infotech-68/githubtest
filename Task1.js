const { groupCollapsed } = require("console");
const { BADFAMILY } = require("dns");
const { element, by, browser } = require("protractor");

describe('angularjs homepage', function() {
    it('should find an element', async function() {
      browser.get('https://angular.io/');
      // browser.manage().window().maximize();

       var a = await browser.getTitle();
       expect(a).toEqual('Angular');
       console.log( a);

       var b = element(by.css('div.text-block>div.text-headline')).getText();
      expect(b).toEqual('DEVELOP ACROSS ALL PLATFORMS');
    })
})