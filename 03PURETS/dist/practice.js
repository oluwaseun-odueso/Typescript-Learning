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
    readPost(id, filename) {
        (0, fs_1.readFile)(filename, 'utf8', (error, data) => {
            if (error)
                throw error;
            const retrievedData = JSON.parse(data);
            for (let i = 0; i < retrievedData.length; i++) {
                if (id == retrievedData[i].id) {
                    console.log(retrievedData[i]);
                }
                ;
            }
            ;
        });
    }
}
;
const post1 = new Post(1, "This is my first post", "A review of my career growth in year 2022", 1);
post1.readPost(3, './posts.txt');
// console.log(data);
