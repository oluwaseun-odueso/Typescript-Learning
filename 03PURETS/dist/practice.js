"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
class Post {
    constructor(id, title, body, commentId) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.commentId = commentId;
    }
    ;
    // Write data
    writeData(filename, newData) {
        (0, fs_1.readFile)(filename, 'utf8', (err, data) => {
            if (err)
                throw err;
            const postData = JSON.parse(data);
            // Update the list with the new data
            postData.push(newData);
            // Write data back to file
            (0, fs_1.writeFile)(filename, JSON.stringify(postData), (err) => {
                if (err)
                    console.log(err);
            });
        });
    }
    ;
    // Read data
    readData(filename) {
        (0, fs_1.readFile)(filename, 'utf8', (error, data) => {
            if (error)
                throw error;
            const retrievedData = JSON.parse(data);
            // console.log(retrievedData)
            return retrievedData;
        });
    }
    // const readData = (filename) => {
    //     return new Promise((resolve, reject) => {
    //         readFile(filename, 'utf8', (err, data) => {
    //             if (err) throw err;
    //             const a = JSON.parse(data);
    //             resolve(a);
    //             reject(new Error)
    //         })  
    //     })
    // } 
    // // Get a post
    // getPost (id: number) {
    //     const posts = this.readData('./posts.txt');
    //         console.log('a')
    //         console.log(posts)
    //         for (let i = 0; i < posts.length; i++) {
    //             if (id == posts[i].id) {
    //                 return (posts[i]);
    //             };
    //         };
    //         return "Post does not exist";
    // };
    // Create new post
    createNewPost(id = this.id, title = this.title, body = this.body, commentId) {
        const newData = { id, title, body, commentId };
        this.writeData('./posts.txt', newData);
        return "Post uploaded successfully";
    }
    ;
}
;
const post1 = new Post(1, "This is my first post", "A review of my career growth in year 2022", 1);
post1.writeData('./posts.txt', {
    id: 1,
    title: "My new post",
    body: "A summary of my Career Development in 2022",
    commentId: 1
});
// const data = post1.readData('./posts.txt')
// const newPost = post1.createNewPost(5, "My Fifth new post", "A summary of my Career Part Five", 5);
// console.log(data);
