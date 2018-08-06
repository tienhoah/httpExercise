var https = require('https');
var log = console.log;


module.exports = function getHTML (options, callback) {

  /* Add your code here */
  var output = "";

  /* Add your code here */
  https.get(options, function (response) {
    response.setEncoding('utf8');

    // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
      output += data;
    });

    response.on('end', function (){
      callback(output);
    });
  });

}

function printHTML (html) {
  log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};


// getHTML(requestOptions,printHTML);