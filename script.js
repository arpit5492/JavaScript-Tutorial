// Local scope:- Variables can be accessed only inside the code block where it has been declared
// Global scope:- Variables can be accessed throughout the code

let age = 30;
if(1){
    let age = 40; // Both will give 40, because new value has been assigned to age variable
    console.log("Inside the 1st code block", age);
    if(1){
        let age = 45;
        console.log("Inside the 2nd code block", age); // It will take the most recent variable value i.e 40
    }
}
console.log("Outside the code block", age);