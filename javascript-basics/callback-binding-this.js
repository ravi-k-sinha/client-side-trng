// Define an object with somr properties and a method
// We will later pass the method as a callback function to another function
var clientData = {
    id: 094545,
    fullName: 'Not Set',

    setUserName : function(firstName, lastName) {
        this.fullName = firstName + ' ' + lastName;
    }
}

function getUserInput(firstName, lastName, callback, callbackObj) {
    // The use of Apply method below will set the 'this' value to callbackObj
    callback.apply(callbackObj, [firstName, lastName]);
}

clientData.setUserName('foo', 'bar');
console.log(clientData.fullName);

// The clientData object will be used by the Apply method to set the 'this' value
getUserInput('Priya', 'Shastri', clientData.setUserName, clientData);

// the fullName property on the clientData was correctly set, which will overwrite 'foo bar'
console.log(clientData.fullName);
