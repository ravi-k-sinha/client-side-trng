var http = require('http');
var url = require('url');

var server = http.createServer(function(request, response) {
    var urlInfo = url.parse(request.url, true);
    const time = new Date(urlInfo.query.iso)
    let result

    if (/^\/api\/parsetime/.test(request.url)) {
        result = parsetime(time)
    } else if (/^\/api\/unixtime/.test(request.url)) {
        result = unixtime(time)
    }

    if (result) {
        response.writeHead(200, {'Content-Type' : 'application/json'});
        response.end(JSON.stringify(result));
    }
    else {
        response.writeHead(404);
        response.end();
    }
});
server.listen(process.argv[2]);

function parsetime (time) {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }
}

function unixtime (time) {
    return { unixtime: time.getTime() }
}
