// arguments and parameters
const niceDay = function(name = 'Mario', time = 'afternoon'){
    console.log(`Good ${time} ${name}`);
}

niceDay(); //If paramenters are not declared here, then it will take the default arguments from the above function
niceDay('Arpit','morning');