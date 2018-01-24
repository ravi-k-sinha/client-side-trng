var http = require('http');
var buf = Buffer.from('');
http.get(process.argv[2], function(response) {    
    response.on('data', function(data) {
        buf = Buffer.concat([buf, data]);
    });
    response.on('end', function() {
        console.log(buf.length);
        console.log(buf.toString());
    }) ;
})