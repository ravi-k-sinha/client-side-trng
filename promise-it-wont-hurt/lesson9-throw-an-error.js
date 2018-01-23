var invalidJson = process.argv[2];

//console.log(invalidJson);

function parsePromised(value) {
    return new Promise(function(fulfill, reject) {
        try {
            JSON.parse(value);
            fulfill('PARSED');
        }
        catch(ex) {
            //console.log(ex);
            reject(ex);
        }
    });
}

parsePromised(invalidJson)
    .then(null, function(error) {
        console.log(error.message);
    });

/* Official 

 'use strict';

 function parsePromised(json) {
   return new Promise(function (fulfill, reject) {
     try {
       fulfill(JSON.parse(json));
     } catch (e) {
       reject(e);
     }
   });
 }

 function onReject(error) {
   console.log(error.message);
 }

 parsePromised(process.argv[2])
 .then(null, onReject);

*/