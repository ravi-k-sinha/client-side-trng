var myModule = require('./lesson06-first-module');

function callback(error, data) {
    if (error) {
        return console.log(error.message);
    }

    data.forEach(element => {
        console.log(element);
    });
}

myModule(process.argv[2], process.argv[3], callback);

/* Official
var filterFn = require('./solution_filter.js')
var dir = process.argv[2]
var filterStr = process.argv[3]

filterFn(dir, filterStr, function (err, list) {
  if (err) {
    return console.error('There was an error:', err)
  }

  list.forEach(function (file) {
    console.log(file)
  })
})

*/