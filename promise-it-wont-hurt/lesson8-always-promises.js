/* 
function attachTitle (name) {
    return 'DR. ' + name;
}

var promise = new Promise(function(fulfill, reject) {
    fulfill('MANHATTAN');
});

promise.then(attachTitle).then(function(value) {
    console.log(value);
});
*/

'use strict';

function attachTitle(name) {
  return 'DR. ' + name;
}

Promise.resolve('MANHATTAN')
  .then(attachTitle)
  .then(console.log);


