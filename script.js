let user = {
    name: 'Rahul',
    age: 30,
    email: 'rahul9876@gmail.com',
    blogs: [
        { title: 'The title of the movie is Life of Pi', likes: 30},
        { title: 'The title of the movie is American Pie', likes: 50}
    ],
    logBlogs(){
        console.log("The blogger has written the following blogs:");
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        });
    }
}

user.logBlogs();
