// object literals:- Objects has properties and values in key value pairs

let user = {
    name: 'Arjun',
    age: 30,
    email: 'arjun1967@gmail.com',
    location: 'Italy',
    blogs: ['Why mac & cheese rules', '10 things to be on the top of everyone'],
    // login: () => {
    //     onsole.log("The user is logged in");
    // },
    login(){ // shorthand for the above
        console.log("The user is logged in");
    },
    // logout: () => {
    //     onsole.log("The user is logged in");
    // },
    logout(){
        console.log("The user is logged out");
    },
    // logBlogs: function(){ // With this keyword, arrow function won't work
    //     // console.log(this.blogs);
    //     console.log("This blogger has written the following blogs:");
    //     this.blogs.forEach(blog => {
    //         console.log(blog);
    //     });
    // }
    logBlogs(){ // With this keyword, arrow function won't work
        // console.log(this.blogs);
        console.log("This blogger has written the following blogs:");
        this.blogs.forEach(blog => {
            console.log(blog);
        });
    }
};

user.login();
user.logout();
user.logBlogs();        