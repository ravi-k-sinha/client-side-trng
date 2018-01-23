/*
var firstPromise = first();

firstPromise.then(fullfillFirst, rejectFirst);

var secondPromise;
function fullfillFirst(value) {
    secondPromise = second(value);
    secondPromise.then(fullfillSecond, rejectSecond);
    return secondPromise;
}

function fullfillSecond(value) {
    console.log(value);
}

var rejectFirst = rejectSecond = function(error) {}

*/

'use strict';

/* global first, second */
var firstPromise = first();
var secondPromise = firstPromise.then(function(val) {
    return second(val);
});
secondPromise.then(console.log);