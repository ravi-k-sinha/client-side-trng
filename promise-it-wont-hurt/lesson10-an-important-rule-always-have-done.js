function alwaysThrows() {
    throw new Error('OH NOES');
}

function iterate(number) {
    console.log(number);
    return number + 1;
}

var promise = Promise.resolve(iterate(1));

promise
   .then(iterate)
   .then(iterate)
   .then(iterate)
   .then(iterate)
   .then(alwaysThrows)
   .then(iterate)
   .then(iterate)
   .then(iterate)
   .then(iterate)
   .catch((error) => alwaysThrows())
   .catch((error) => console.log(error.message));

