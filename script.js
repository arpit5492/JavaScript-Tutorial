// callbacks & foreach
// const myFunc = callBackFunc => {
//     let value = 50;
//     callBackFunc(value);
// };

// myFunc(value => { // Passing function as a parameter
//     console.log(value);
// });

// callback functions are functions that are passed to another function or method as an argument

let people = ['Rahul', 'Rajiv', 'Rishabh', 'Ryan', 'Joseph'];

const logPerson = (person, index) => {
    console.log(`${index} - Hello ${person}`);
};

people.forEach(logPerson); // forEach() method