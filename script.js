// primitive values
let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(scoreOne, scoreTwo);

scoreOne = 100;
console.log(scoreOne, scoreTwo);

// reference values

let names = {name: 'Ryan', age: 30};
let names1 = names;

console.log(names, names1);

names.name = 'Rahul';
console.log(names, names1);