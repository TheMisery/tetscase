module.exports = { 
    'tags' : ['testcase3'], 
    'test artsyjewels' : function (browser) { 
    browser 
    .url('https://store.steampowered.com/login/?redir=?l=russian&re..') // Go to a url 
    .waitForElementVisible('body', 1000) // wait till page loads 
    .setValue('#input_username', 'ss_rom_ss') 
    .setValue('#input_password', 'aa16102000aa') 
    .click('#login_btn_signin > button > span') 
    .pause(1000) 
    .end(); 
    } 
    };