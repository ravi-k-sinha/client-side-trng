/*
// Warmup
setTimeout(() => console.log('TIMED OUT!'), 300);
*/

/*
// Lesson 1 - Using success
'use strict';

var promise = new Promise(function(fulfill, reject) {
    setTimeout(() => fulfill('FULFILLED!'), 300);
})

promise.then(console.log);
*/

/*
// Lesson 2 - Using rejection
'use strict';

var promise = new Promise(function(fulfill, reject) {
    setTimeout(() => reject(new Error('REJECTED!')), 300);
})

function onReject(error) {
    console.log(error.message);
}

promise.then(console.log, onReject);
*/

/*
// Lesson 3 - Can be resolved only once
'use strict';

var promise = new Promise(function(fulfill, reject) {
    fulfill('I FIRED');
    reject(new Error('I did not fire'));
});

function onReject(error) {
    console.log(error.message);
}

promise.then(console.log, onReject);
*/

/*
// Lesson 4 - Is it always async - promise always executes on the next event turn loop
'use script';

var promise = new Promise(function(fulfill, reject) {
    fulfill('PROMISE VALUE');
})

promise.then(console.log);

console.log('MAIN PROGRAM');
*/




