var fs = require('fs');

fs.readFile(process.argv[2], function callback(error, data) {
    if (error) {
        return console.log(error);
    }
    // fs.readFile(file, 'utf8', callback) can also be used
    console.log(data.toString().split('\n').length - 1);
});