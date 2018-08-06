var https = require('https');
var log = console.log;

function getAndPrintHTML (options) {

  /* Add your code here */
  var output = "";

  /* Add your code here */
  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');

    // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
      output += data;
    });

    response.on('end', function() {
      log('Response stream complete.');
      log(output);
    });
  });

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);