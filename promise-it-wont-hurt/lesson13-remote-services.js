/*
var HTTP = require("q-io/http");

HTTP.read('http://localhost:7000')
    .then((response) => callDb(response.toString()))
    .done();

function callDb(userId) {
    //console.log('http://localhost:7001/' + userId);
    HTTP.read('http://localhost:7001/' + userId)
        .then((response) => console.log(JSON.parse(response)))
        .done()
}

*/

var qhttp = require('q-io/http');

qhttp.read("http://localhost:7000/")
.then(function (id) {
  return qhttp.read("http://localhost:7001/" + id);
})
.then(function (json) {
  console.log(JSON.parse(json));
})
.then(null, console.error)
.done();