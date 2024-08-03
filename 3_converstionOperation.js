let score = undefined

console.log(typeof score);
console.log(typeof(score));

let value = Number(score)
console.log(typeof(value));

// string conversion

// "33" => 33
// "23abc" => NAN (not a number)
// "true" (boolean value) => 1 , "false" => 0

let isLoggedIn = "tharunn"
let bolleanIsLoggedIn = Boolean(isLoggedIn)
console.log(bolleanIsLoggedIn);

// "" => false
// "any string" => true

let number = 45
let numToString = String(number)
console.log(typeof numToString);
