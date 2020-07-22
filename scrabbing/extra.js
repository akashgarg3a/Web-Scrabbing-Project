
var webpage = require('webpage').create()



webpage.open('https://stackoverflow.com/questions/15739263/phantomjs-click-an-element', function() {
    webpage.evaluate(function() {
        // document.getElementsByClassName('ws-nowrap s-btn s-btn__primary').click();  
        webpage.render('scotch.jpeg');
    });
    phantom.exit();
});
