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
    createNewPost() {
        const checkFoulLanguageInTitle = new Foul(this.title).checkForFoulLanguage();
        const checkFoulLanguageInBody = new Foul(this.body).checkForFoulLanguage();
        if (checkFoulLanguageInTitle || checkFoulLanguageInBody) {
            return "Cannot create post, please do not use the following words: fuck, shit, idiot, pussy, useless";
        }
        const newData = {
            id: this.id,
            title: this.title,
            body: this.body,
            commentId: this.commentId
        };
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
        const checkFoulLanguageInTitle = new Foul(title).checkForFoulLanguage();
        const checkFoulLanguageInBody = new Foul(body).checkForFoulLanguage();
        if (checkFoulLanguageInTitle || checkFoulLanguageInBody) {
            console.log("Cannot update post, please do not use the following words: bitch, fuck, shit, idiot, pussy, useless");
            return;
        }
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
    createNewComment() {
        const checkFoulLanguageInText = new Foul(this.text).checkForFoulLanguage();
        if (checkFoulLanguageInText) {
            return "Cannot create post, please do not use the following words: fuck, shit, idiot, pussy, useless";
        }
        const newData = {
            id: this.id,
            postId: this.postId,
            text: this.text
        };
        this.writeComment(newData);
        return "You have successfully commented on post";
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
        const checkFoulLanguageInText = new Foul(text).checkForFoulLanguage();
        if (checkFoulLanguageInText) {
            console.log("Cannot update comment, please do not use the following words: bitch, fuck, shit, idiot, pussy, useless");
            return;
        }
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
    // Delete a comment
    deleteComment(id) {
        (0, fs_1.readFile)('./comments.txt', 'utf8', (error, data) => {
            if (error)
                throw error;
            const commentData = JSON.parse(data);
            for (let i = 0; i < commentData.length; i++) {
                if (id === commentData[i].id) {
                    commentData.splice(i, 1);
                    console.log("Comment has been deleted successfully");
                }
                ;
            }
            (0, fs_1.writeFile)('./comments.txt', JSON.stringify(commentData), (err) => {
                if (err)
                    console.log(err);
            });
        });
    }
    ;
}
;
class Foul {
    constructor(text) {
        this.text = text;
    }
    checkForFoulLanguage() {
        const foulWords = ["bitch", "fuck", "shit", "idiot", "pussy", "useless"];
        for (let i = 0; i < foulWords.length; i++) {
            if (this.text.includes(foulWords[i])) {
                return foulWords[i];
                // return `Post title or body should not contain foul word + ${foulWords[i]}`
            }
            ;
        }
        ;
        return false;
    }
    ;
}
;
// const post1 = new Post(8, "My eight post", "This is my eight good post")
// post1.updatePost(8, "My eight big post", "This is my eight good post")
// const newPost = post1.createNewPost()
// console.log(newPost)
// const checkForFoul = new Foul('An fuckieeee man')
// console.log(checkForFoul.checkForFoulLanguage())
const comment1 = new Comment(2, 1, "Nice post, good job sir!");
// const newComment = comment1.createNewComment()
// console.log(newComment);
// comment1.deleteComment(3)
comment1.updateComment(1, "Keep winning big brother");
// comment1.readComment(2)
