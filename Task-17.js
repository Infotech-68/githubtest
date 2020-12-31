const { element } = require("protractor");

describe('Protractor Practice', function(){
    it('Get text in a string', async function(){

        browser.get('https://angular.io/');
        browser.sleep(3000);
        browser.manage().window().maximize();
        element(by.css("a[class='button hero-cta']")).click();
        await element(by.css('li:nth-child(3)>a>span')).click();
        element(by.css('div:nth-child(1)>a:nth-child(2)')).click();
    
        browser.sleep(3000);
        var text1 = await element(by.css('div:nth-child(3)>div:nth-child(6)>div>a>div>p')).getText();
        var text2 = text1.slice(116,127);
        console.log(text2);

        element(by.css('li:nth-child(4)>a>span')).click();
        element.all(by.css('tr>th>a')).getText().then(function(list){
            for(let i=5; i<10; i++)
            {
                    console.log('The events are '+ list[i]);
            }
        })
    })
})