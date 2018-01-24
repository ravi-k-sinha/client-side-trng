var http = require('http');
var bl = require('bl');

var output = [];
var num = 0;

for (var i =0; i < 3; i++) {
    (function (index) {
        http.get(process.argv[2 + index], res => readServerData(res, index));
    })(i);
}

function readServerData (response, index){
    response.pipe(bl(function(error, data) {
        if (error) {
            console.error(error);
        }
        //console.log("index is" + index);
        output[index] = data.toString();
        printInOrder(++num);
    }));
}

function printInOrder(num) {
    if (num == 3) { // reading data starts when num is at 3, so checking for 6
        output.forEach(o => console.log(o));
    }
}

/*

var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults () {
  for (var i = 0; i < 3; i++) {
    console.log(results[i])
  }
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {
        return console.error(err)
      }

      results[index] = data.toString()
      count++

      if (count === 3) {
        printResults()
      }
    }))
  })
}

for (var i = 0; i < 3; i++) {
  httpGet(i)
}

*/


