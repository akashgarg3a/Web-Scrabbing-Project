var webpage = require('webpage').create()

webpage.open('https://www.espncricinfo.com/series/19322/commentary/1187684/', function() {
    webpage.render('scotch.jpeg');
    phantom.exit();
});