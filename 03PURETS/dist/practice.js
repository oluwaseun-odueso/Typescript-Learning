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
    writeData(filename, details) {
        const newObj = JSON.stringify(details);
        (0, fs_1.writeFile)(filename, newObj, (err) => {
            if (err)
                throw err;
        });
    }
    ;
    // Read data
    readData(filename) {
        (0, fs_1.readFile)(filename, 'utf8', (err, data) => {
            if (err)
                throw err;
            const postData = JSON.parse(data);
            console.log(postData);
            return postData;
        });
    }
    ;
    // Get a post
    getPost(id) {
        const posts = this.readData('./posts.txt');
        console.log('a');
        console.log(posts);
        for (let i = 0; i < posts.length; i++) {
            if (id == posts[i].id) {
                return (posts[i]);
            }
            ;
        }
        ;
        return "Post does not exist";
    }
    ;
    // Create new post
    createNewPost(id = this.id, title = this.title, body = this.body, commentId) {
        const currentData = this.readData('./posts.txt');
        const newData = currentData.push({ id, title, body, commentId });
        this.writeData('./posts.txt', newData);
        return "Post uploaded successfully";
    }
    ;
    // Check if post exists
    confirmPostId(id) {
        const posts = this.readData('./posts.txt');
        for (let i = 0; i < posts.length; i++) {
            if (id === posts[i].id) {
                return true;
            }
            ;
        }
        return false;
    }
    ;
    // Update a post
    updatePost(id, title, body) {
        const posts = this.readData('./posts.txt');
        for (let i = 0; i < posts.length; i++) {
            if (id === posts[i].id) {
                posts[i].title = title;
                posts[i].body = body;
                this.writeData('./posts.txt', posts);
                return "Post has been successfully updated";
            }
            ;
        }
        return "Post does not exist";
    }
    ;
    // Delete a post
    deletePost(id) {
        const posts = this.readData('./posts.txt');
        for (let i = 0; i < posts.length; i++) {
            if (id === posts[i].id) {
                posts.splice(i, 1);
                this.writeData('./posts.txt', posts);
                return "Post has been deleted";
            }
            ;
        }
        return "Post does not exist";
    }
    ;
}
;
