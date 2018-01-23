/* Challenge 2 ***
var input = process.argv[2];

console.log(`Hello, ${input}!`);
console.log(`Your name lowercased is "${input.toLowerCase()}".`);
*/

/*
// Challenge 3
var inputs = process.argv.slice(2);
//console.log(inputs);

var result = inputs
            .map(x => x[0])
            .reduce((soFar, s) => soFar + s);

//console.log(result);

console.log(`[${inputs}] becomes "${result}"`);
*/

/*
// Challenge 4
var foot = {
    kick : function() {
        this.yelp = "Ouch!";
        setImmediate(() => console.log(this.yelp));
    }
};

foot.kick();
*/

/*
// Challenge 5
let userArray = process.argv.slice(2);
//console.log(userArray);
let data = {};
[, data.username, data.email] = userArray;

console.log(data);
*/

/*
// Challenge 6
//console.log(process.argv);
var numbers = process.argv.slice(2).map(Number);
//console.log(numbers);
var min = Math.min(...numbers);
console.log(`The minimum of [${numbers}] is ${min}`);
*/

/*
// Challenge 7
module.exports = function average(...args) {
    // var sum = 0;
    // var count = 0;
    // args.forEach(value => {sum+=value; count++;});
    // console.log(`sum is ${sum} and count is ${count}`);
    // return sum/count;

    var sum = args.reduce((soFar, value) => soFar + value, 0);
    return sum / args.length;
};
*/

/*
// Challenge 8
// module.exports = function midpoint(lower = 0, upper = 1) {
//     if (!lower) lower = 0;
//     if (!upper) upper = 1;
//     return (lower + upper) / 2;
// };

module.exports = (x = 0, y = 1) => (x + y) / 2;
*/

/*
// Challenge 9
module.exports = function makeImportant(text, times = `${text.length}`) {
    return text + '!'.repeat(times);
}

module.exports = (text, times = text.length) => text + '!'.repeat(times);
*/

/*
// Challenge 10
console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

// function html(tokens, name, message) {
//   const length = tokens.length;
//   //console.log(`tokens=[${tokens}], name=[${name}], message=[${message}]`);

//   name = name.replace(/&/g, "&amp;");
//   name = name.replace(/</g, "&lt;");
//   name = name.replace(/>/g, "&gt;");
//   name = name.replace(/'/g, "&apos;");
//   name = name.replace(/"/g, "&quot;");
//   arguments[1] = name;

//   message = message.replace(/&/g, "&amp;");
//   message = message.replace(/</g, "&lt;");
//   message = message.replace(/>/g, "&gt;");
//   message = message.replace(/'/g, "&apos;");
//   message = message.replace(/"/g, "&quot;");
//   arguments[2] = message;

//   let count = 0;
//   var combined = "";
//   tokens.forEach(element => {
//     combined += element;
//     count++;
//     if (count < tokens.length) {
//         combined = combined + arguments[count];
//     }
//   });  

//   return combined;
// }

function html(pieces, ...substitutions) {
    var result = pieces[0];
    for (var i = 0; i < substitutions.length; i++) {
        result += escape(substitutions[i]) + pieces[i+1];
    }
    return result;
}

function escape(s) {
    return s.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/'/g, "&apos;")
            .replace(/"/g, "&quot;");
}
*/