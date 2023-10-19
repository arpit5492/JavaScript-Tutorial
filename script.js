//strings :- A series of characters is called strings
console.log('Hello World!!');

let str = 'I am Arpit';
console.log(str);

// string concatenation
let firstName = 'Arpit';
let lastName = 'Mallick';
fullName = (firstName + ' ' + lastName);
console.log(fullName);

// extracting characters out of a string:- Here also the index starts from 0
console.log(fullName[2]);

// string length property
console.log(fullName.length);

// string methods:- There are some methods that alter the original variable but there are some who doesn't alter the variables
nameUpper = fullName.toUpperCase();
console.log(nameUpper);

nameLower = fullName.toLowerCase();
console.log(nameLower);

console.log(nameUpper, fullName);

// Check the index of a character
console.log(fullName.indexOf('l'));
console.log(fullName.lastIndexOf('l')); // Gives the last index of the same repeating characters

// Other string methods
console.log(fullName.slice(0,7)); // Get the string starting from index 0 to 7-1 index.

console.log(fullName.substr(2,8)); // Get the string starting from index 2 and the 8 characters after index 2

console.log(fullName.replace('A','a'));

console.log(fullName.replace('l','m')); // If there are repeating characters, then replace method will only replace the character which is at first
