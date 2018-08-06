var getHTML = require('../http-functions');
var log = console.log;

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};


function print_1337 (html){
  var hackObj = {a : '4', e : '3', l : '1', o : '0', s : '5', t : '7'};
  var keysArr = Object.keys(hackObj);
  var hackHTML = html.split(' ').join('').split('');

  var newHTML = hackHTML.map(function (elem) {
    if (keysArr.indexOf(elem) >= 0){
      return hackObj[elem];
    }
    else {
      return elem;
    }
  });
  log(newHTML.join(''));
}

getHTML(requestOptions,print_1337);