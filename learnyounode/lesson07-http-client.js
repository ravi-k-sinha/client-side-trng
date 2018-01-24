var http = require('http');

var url = process.argv[2];

http.get(url, callback);

function callback(response) {
    response.on("data", function(data) {
        console.log(data.toString()); // If utf-8 is used, then toString() will not be required on the buffer object
    });

    response.on('error', console.error);
}

/* Official

var http = require('http')

http.get(process.argv[2], function (response) {
  response.setEncoding('utf8')
  response.on('data', console.log)
  response.on('error', console.error)
}).on('error', console.error)

*/