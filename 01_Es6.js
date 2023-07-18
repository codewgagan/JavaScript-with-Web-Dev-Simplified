//Destructuring in Arrays

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F']
const numbers = ['1', '2', '3','4', '5', '6']

// const a = alphabet[0] //old style
// const b = alphabet[1] //old style

const[a,b, ...rest] = alphabet //New style using rest operator we can retrieve other elements in the array.

const newArray1 = [...alphabet, ...numbers]//1st method to get combined arrays.
const newArray2 = alphabet.concat(numbers)//2nd method to get combined arrays.


//Powerful use of Destructuring is you can combine two arrays

console.log(a);
console.log(b);
// console.log(rest);
// console.log(newArray1)
console.log(newArray2)

//Destructuring in Functions
function sumAndMultiply(a, b){
    return[a+b, a*b]
}
const [sum, multiply, division = 'no div'] = sumAndMultiply(3,3)
console.log(sum);
console.log(multiply);
console.log(division);


//Destructuring in Objects
const person1 = {
    name: 'Gagan',
    age: 20,
    address: {
        city: 'Mumbai',
        state: 'Maharashtra'
    }
}
const person2 = {
    name: 'Krishna',
    age: 24,
    address: {
        city: 'Dwarka',
        state: 'Uttar Pradesh'
    }
}
//in objects we use {}  instead of []

const {name, ...rests} = person1
console.log(name);
console.log(rests);

function printUser ({name, age}){
console.log(`person2's name is ${name} and age is ${age}`);
}
printUser(person2)