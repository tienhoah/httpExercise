var getHTML = require('../http-functions');
var log = console.log;

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};


function printLowerCase (html){
  log(html.toLowerCase());
}

getHTML(requestOptions,printLowerCase);