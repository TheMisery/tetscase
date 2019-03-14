module.exports = { 
    'tags' : ['testcase'], 
    'test artsyjewels' : function (browser) { 
    browser 
    .url('https://kaspi.kz/') // Go to a url 
    .waitForElementVisible('body', 10000) // wait till page loads 
    .click('#headerRegionConfirm__ConfirmButton') 
    .assert.visible('#headerRegionId')
    .pause(1000) 
    .end(); 
    } 
    };