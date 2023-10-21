// Logical Operators: OR ||, and &&

const password = "p@ss1";
if(password.length >= 12 && password.includes('@')){
    console.log("The password is strong enough!!");
}
else if(password.length >= 8 || password.length >= 5 && password.includes('@')){
    console.log("The password is long enough!!");
}
else{
    console.log("The password is not that strong!! Please write a new password");
}