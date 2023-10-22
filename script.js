// object literals:- Objects has properties and values in key value pairs

let user = {
    name: 'Arjun',
    age: 30,
    email: 'arjun1967@gmail.com',
    location: 'Italy',
    blogs: ['Why mac & cheese rules', '10 things to be on the top of everyone']
};

console.log(user);
console.log(user.name);

console.log(user['email']);

user.name = 'Rahul';
console.log(user.name);

user['age'] = 45;

console.log(user.age);

console.log(typeof(user));