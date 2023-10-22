// arrow function
// const calcArea = (radius) => {
//     return 3.14 * radius**2;
// };

// More shorter way to write an arrow function
const calcArea = radius => 3.14 * radius**2;
const area = calcArea(5);
console.log("Area is: ", area);

const greet = () => 'Hello World!!';
console.log(greet());

const bill = (products, tax) => {
    let total = 0;
    for(let i = 0; i<products.length;i++){
        total+=products[i]+products[i]*tax;
    }
    return total;
}

console.log(bill([23,45,21,67,32], 0.2));