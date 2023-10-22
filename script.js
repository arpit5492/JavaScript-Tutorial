const ul = document.querySelector(".people");

const people = ['Rahul', 'Rajiv', 'Rishabh', 'Joseph', 'Daniel'];

let html = ``;
const person = (person) => {
    html+= `<li style = "color: blue">${person}</li>`;
};

people.forEach(person);

ul.innerHTML = html;