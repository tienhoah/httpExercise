var getHTML = require('./http-functions');
var log = console.log;

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printHTML (html) {
  log(html);
}

getHTML(requestOptions,printHTML)