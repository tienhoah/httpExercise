var getHTML = require('../http-functions');
var log = console.log;

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};


function printUpperCase (html){
  log(html.toUpperCase());
}

getHTML(requestOptions,printUpperCase);