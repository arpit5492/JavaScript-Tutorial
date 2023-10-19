// Variable name rules:
// 1. Variable names can't be started with a number. It can start with an "_" and "$".
// 2. It's a good practice to name the variables in camel case like "myAge", "yourScore".
// 3. Also we can't use reserved kewords to name our variables in JS.

// With let variable, we can change the value whenever we want to
let a = 10;
console.log(a);

let year = 2040;
console.log(a, year);

// But with const variable, we can't change the value of the variable after it is declared once
const c = 50;
console.log(c);

// c = 90;
// console.log(c); // If we do this then we will get an error saying "Assignment to constant variable."

// There is an older version of variable named "var" keyword which also does the same thing as "let" keyword
var score = 20.9;
console.log(score);

score = 30.4
console.log(score);