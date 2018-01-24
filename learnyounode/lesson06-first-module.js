module.exports = function(directory, filext, callback) {

    var fs = require('fs');
    var path = require('path');

    fs.readdir(directory, function(error, list) {
        if (error) {
            return callback(error);
        }

        var data = [];

        list.forEach(element => {
            if (path.extname(element) === '.' + filext) {
                data.push(element);
            }
        });

        callback(null, data);
    });
};

/* Official 

var fs = require('fs')
var path = require('path')

module.exports = function (dir, filterStr, callback) {
  fs.readdir(dir, function (err, list) {
    if (err) {
      return callback(err)
    }

    list = list.filter(function (file) {
      return path.extname(file) === '.' + filterStr
    })

    callback(null, list)
  })
}

*/