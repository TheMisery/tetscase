module.exports = { 
    'tags' : ['testcase10'], 
    'test artsyjewels' : function (browser) { 
    browser 
    .url('https://vk.com/') // Go to a url 
    .waitForElementVisible('body', 10000) // wait till page loads 
    .assert.visible('#bottom_nav > div.footer_links > a:nth-child(1)')
    .click('#bottom_nav > div.footer_links > a:nth-child(1)')
    .assert.visible('#content > div:nth-child(2) > div > div > div')
    .pause(3000) 
    .end(); 
    } 
    };