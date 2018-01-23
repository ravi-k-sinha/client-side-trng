var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function(err, list) {
    if (err) {
        return console.log(err);
    }

    list.forEach(element => {
        if (path.extname(element) === '.' + process.argv[3]) {
            console.log(element);
        }
    });
})