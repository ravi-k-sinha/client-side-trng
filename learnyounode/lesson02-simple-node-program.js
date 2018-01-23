//console.log(process.argv);

var numbers = process.argv.slice(2);

var result = numbers.map(n => Number(n)).reduce((soFar, current) => soFar + current, 0);

console.log(result);

/* Official 


 var result = 0

 for (var i = 2; i < process.argv.length; i++) {
   result += Number(process.argv[i])
 }

 console.log(result)

 */