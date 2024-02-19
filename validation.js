
// value type
// string, number, boolean

// check type

const number = 10;

if (typeof number === 'number') {
    console.log('value is a number');
}
else {
    console.log('value is not a number');
}


const numbers = [10, 30, 40, 50];

// array checking System
console.log(Array.isArray(numbers)); //true
// console.log(typeof numbers); //object

const student = { name: 'Shahin', job: 'Developer' };

console.log(typeof student)


// isNaN

isNaN('12');
isNaN('ab');
isNaN(12);