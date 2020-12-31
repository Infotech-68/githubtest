const { browser } = require("protractor");

describe('Protractor Practice', function(){
    it('Get array sorting descending', async function(){

        browser.get('https://angular.io/');

        element(by.css("a[class='button hero-cta']")).click();

        await element.all(by.css('mat-sidenav>div:nth-child(1)>aio-nav-menu>aio-nav-item')).getText().then(function(list){
            for(let i=0; i<list.length; i++)
            {
                    console.log('The options are '+ list[i]);
            }
        })
        browser.sleep(10000);
        browser.navigate().refresh();
        await element(by.css('li:nth-child(3)>a>span')).click();
    })
})