// Only one of the statements will run below

const password = "p@ssword-678923";
if(password.length >= 12){
    console.log("The password is too strong!!");
}
else if(password.length >= 8){
    console.log("The password is long enough!!");
}
else{
    console.log("The password is too short!! Please write a new password");
}