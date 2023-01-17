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
    // Create new post
    createNewPost(id = this.id, title = this.title, body = this.body, commentId) {
        const newData = { id, title, body, commentId };
        this.writeData('./posts.txt', newData);
        return "Post uploaded successfully";
    }
    ;
    // Read data
    readPost(id) {
        (0, fs_1.readFile)('./posts.txt', 'utf8', (error, data) => {
            if (error)
                throw error;
            const postData = JSON.parse(data);
            // Check for match
            for (let i = 0; i < postData.length; i++) {
                if (id == postData[i].id) {
                    console.log(postData[i]);
                }
                ;
            }
            console.log('Post does not exist');
        });
    }
    // Update a post
    updatePostProcess(id, title, body) {
        (0, fs_1.readFile)('./posts.txt', 'utf8', (err, data) => {
            if (err)
                throw err;
            const postData = JSON.parse(data);
            // Check for match and update
            for (let i = 0; i < postData.length; i++) {
                if (id === postData[i].id) {
                    postData[i].title = title;
                    postData[i].body = body;
                }
                ;
            }
            ;
            (0, fs_1.writeFile)('./posts.txt', JSON.stringify(postData), (err) => {
                if (err)
                    console.log(err);
            });
            // return "Post has been updated successfully"
        });
        // return "Could not update post"
    }
    ;
    updatePost(id, title, body) {
        this.updatePostProcess(id, title, body);
        return "Post has been updated successfully";
    }
}
;
const post1 = new Post(1, "This is my first post", "A review of my career growth in year 2022", 1);
const data = post1.updatePost(1, "New Post", "This is the new post");
// post1.readPost(6)
console.log(data);
