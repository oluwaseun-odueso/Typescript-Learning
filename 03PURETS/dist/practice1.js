"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
class Post {
    constructor(details) {
        this.details = details;
    }
    ;
    // Write data
    writeData(filename, details) {
        const newObj = JSON.stringify([details]);
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
    // Create new post
    createNewPost() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.writeData('./posts.txt', this.details);
                return "Post uploaded successfully";
            }
            catch (error) {
                throw error;
            }
            ;
        });
    }
    ;
    // Check if post exists
    confirmPostId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const posts = yield this.readData('./posts.txt');
                for (let i = 0; i < posts.length; i++) {
                    if (id === posts[i].id) {
                        return true;
                    }
                    return false;
                }
                ;
            }
            catch (error) {
                throw error;
            }
            ;
        });
    }
    ;
    // Update a post
    updatePost(id, details) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const posts = yield this.readData('./posts.txt');
                for (let i = 0; i < posts.length; i++) {
                    if (id === posts[i].id) {
                        posts[i].title = details.title;
                        posts[i].body = details.body;
                        this.writeData('./posts.txt', posts);
                        return "Post has been successfully updated";
                    }
                    ;
                }
                return "Post does not exist";
            }
            catch (error) {
                throw error;
            }
            ;
        });
    }
    ;
    // Delete a post
    deletePost(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const posts = yield this.readData('./posts.txt');
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
            catch (error) {
                throw error;
            }
            ;
        });
    }
    ;
}
;
const post1 = new Post({
    id: 1,
    title: "My new post",
    body: "A summary of my Career Development in 2022",
    commentId: 1
});
// const createNew = post1.createNewPost();
post1.writeData('./posts.txt', {
    id: 1,
    title: "My new post",
    body: "A summary of my Career Development in 2022",
    commentId: 1
});
post1.writeData('./posts.txt', {
    id: 1,
    title: "My second new post",
    body: "A summary of my Career Development in 2022 Part Two",
    commentId: 1
});
post1.readData('./posts.txt');
// post1.updatePost(1, 
//     {title: "My Latest Post", body: "This is my latest post"}
//     )
// const getNew = post1.getPost(1)
// console.log(getNew)
