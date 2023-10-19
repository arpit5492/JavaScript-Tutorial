// template strings
let book = "Oliver Twist";
let author = "Charles Dickens";
likes = 100;

// concatenate way
// let r = "The book named " + book + " by the author " + author + " has " + likes + " likes.";
// console.log(r);

// template strings way:- Easy way to concatenate
// let res = `The book named ${book} written by the author ${author} has ${likes} likes.`;
// console.log(res);

// creating html template using template strings
let html = `
    <h2>${book}</h2>
    <p>${author}</p>
    <span>This book has ${likes} likes</span>
`;
console.log(html);