"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
class Post {
    constructor(id, title, body, commentId) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.commentId = commentId;
        this.foulWords = ["fuck", "shit", "pussy", "useless"];
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
        // for (let i = 0; i < this.foulWords.length; i++) {
        //     if (title.includes(this.foulWords[i]) || body.includes(this.foulWords[i]) ) {
        //         return `Post title or body should not contain foul word + ${this.foulWords[i]}`
        //     };
        // };
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
                if (id === postData[i].id) {
                    console.log(postData[i]);
                }
                ;
            }
            ;
        });
    }
    // Update a post
    updatePost(id, title, body) {
        (0, fs_1.readFile)('./posts.txt', 'utf8', (err, data) => {
            if (err)
                throw err;
            const postData = JSON.parse(data);
            // Check for match and update
            for (let i = 0; i < postData.length; i++) {
                if (id === postData[i].id) {
                    postData[i].title = title;
                    postData[i].body = body;
                    console.log("Post has been updated successfully");
                }
                ;
            }
            ;
            (0, fs_1.writeFile)('./posts.txt', JSON.stringify(postData), (err) => {
                if (err)
                    console.log(err);
            });
        });
    }
    ;
    // Delete a post
    deletePost(id) {
        (0, fs_1.readFile)('./posts.txt', 'utf8', (error, data) => {
            if (error)
                throw error;
            const postData = JSON.parse(data);
            for (let i = 0; i < postData.length; i++) {
                if (id === postData[i].id) {
                    postData.splice(i, 1);
                    console.log("Post has been deleted successfully");
                }
                ;
            }
            (0, fs_1.writeFile)('./posts.txt', JSON.stringify(postData), (err) => {
                if (err)
                    console.log(err);
            });
        });
    }
    ;
}
;
class Comment {
    constructor(id, postId, text) {
        this.id = id;
        this.postId = postId;
        this.text = text;
    }
    ;
    // Helper method to comment on post
    writeComment(newData) {
        (0, fs_1.readFile)('./comments.txt', 'utf8', (err, data) => {
            if (err)
                throw err;
            const postData = JSON.parse(data);
            // Update the list with the new data
            postData.push(newData);
            // Write data back to file
            (0, fs_1.writeFile)('./comments.txt', JSON.stringify(postData), (err) => {
                if (err)
                    console.log(err);
            });
        });
    }
    ;
    // Write new comment on post
    createNewComment(id = this.id, postId = this.postId, text = this.text) {
        const newData = { id, postId, text };
        this.writeComment(newData);
        return "You have successfully commented on this post";
    }
    ;
    // Get/read comment
    readComment(id) {
        (0, fs_1.readFile)('./comments.txt', 'utf8', (error, data) => {
            if (error)
                throw error;
            const commentData = JSON.parse(data);
            // Check for match
            for (let i = 0; i < commentData.length; i++) {
                if (id === commentData[i].id) {
                    console.log(commentData[i]);
                }
                ;
            }
            ;
        });
    }
    // Update a comment
    updateComment(id, text) {
        (0, fs_1.readFile)('./comments.txt', 'utf8', (err, data) => {
            if (err)
                throw err;
            const commentData = JSON.parse(data);
            // Check for match and update
            for (let i = 0; i < commentData.length; i++) {
                if (id === commentData[i].id) {
                    commentData[i].text = text;
                    console.log("Comment has been updated successfully");
                }
                ;
            }
            ;
            (0, fs_1.writeFile)('./comments.txt', JSON.stringify(commentData), (err) => {
                if (err)
                    console.log(err);
            });
        });
    }
    ;
}
;
const comment1 = new Comment(1, 1, "Nice post, good job sir!");
comment1.updateComment(1, "Keep winning brother");
// comment1.createNewComment(2, 1, "This really helped me. thanks a lot")
// comment1.readComment(2)
