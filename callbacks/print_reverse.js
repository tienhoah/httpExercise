var getHTML = require('../http-functions');
var log = console.log;

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};


function printReverse (html){
  log(html.split(' ').reverse().join(''));
}

getHTML(requestOptions,printReverse);