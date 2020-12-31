const { browser } = require("protractor");

describe('Protractor Practice', function(){
    it('Get array sorting descending', async function(){

        browser.get('https://angular.io/');
        browser.sleep(3000);
        browser.manage().window().maximize();
        element(by.css("a[class='button hero-cta']")).click();

        await element.all(by.css('mat-sidenav>div:nth-child(1)>aio-nav-menu>aio-nav-item')).getText().then(function(list){
            for(let i=0; i<list.length; i++)
            {
                    console.log('The options are '+ list[i]);
            }
        })
        browser.sleep(5000);
        await element(by.css('li:nth-child(3)>a>span')).click();
        var text = await element(by.css('div:nth-child(4)>div:nth-child(9)>div>a>div>h4')).getText();
        var text1 = text.slice(30,50);
        expect(text1).toEqual('ng-zorro-antd-mobile');
    })
})