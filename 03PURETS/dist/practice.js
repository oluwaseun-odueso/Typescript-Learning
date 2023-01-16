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
            const list1 = [];
            for (let i = 0; i < postData.length; i++) {
                const element = postData[i];
                list1.push(element);
            }
            // Update the list with the new data
            list1.push(newData);
            // Write data back to file
            (0, fs_1.writeFile)(filename, JSON.stringify(list1), (err) => {
                if (err)
                    console.log(err);
            });
        });
    }
    ;
    // Get a post
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
const newPost = post1.createNewPost(5, "My Fifth new post", "A summary of my Career Part Five", 5);
console.log(newPost);
