function greet(gender, age, name) {
    var salutation = gender === 'male' ? 'Mr. ' : 'Ms. ';

    if (age < 26) {
        return 'Hey, ' + name + '.';
    }

    return "Hello, " + salutation + name + '.';    
}

console.log(greet('female', 35, 'Meera'));

var greetAnAdultMale = greet.bind(null, 'male', 45);

console.log(greetAnAdultMale('Ravi Sinha'));

var greetAYoungster = greet.bind(null, "", 16);
console.log(greetAYoungster('Alex'));
console.log(greetAYoungster('Deepak Saxena'));

var greetAFemale = greet.bind(null, 'female');
console.log(greetAFemale(27, 'Sarita'));
console.log(greetAFemale(15, 'Sara'));