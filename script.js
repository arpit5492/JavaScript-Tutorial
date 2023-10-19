// In arrays in JS, we can store values of different datatypes like lists in python

let arr1 = ['Rahul', 'Rajiv', 'Raj', 'Arpit', 20, 30];
console.log(arr1);

console.log(arr1[2]);

// array methods and properties

console.log(arr1.length);
// join method:- joins the array elements with the specified characters

// let res = arr1.join(", ");
// console.log(res);

// let res = arr1.indexOf(20);
// console.log(res);

// let res = arr1.concat([2,4,'John','Jimmy']); // Concatenates two arrays
// console.log(res);

let res = arr1.push('Kolkata'); // This method alters the original array with the new value
// console.log(res);// Returns the new length of the array
// console.log(arr1);
res = arr1.pop(); // Deletes the last element in the array
console.log(res); // Prints the element that is deleted from the array
console.log(arr1);




