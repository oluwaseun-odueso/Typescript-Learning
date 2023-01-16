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
}
;
const post1 = new Post(1, "This is my first post", "A review of my career growth in year 2022", 1);
post1.writeData('./posts.txt', {
    id: 3,
    title: "My third new post",
    body: "A summary of my Career Development in 2022 Part Three",
    commentId: 3
});
// post1.writeData('./posts.txt', {
//     id: 1,
//     title: "My second new post",
//     body: "A summary of my Career Development in 2022 Part Two",
//     commentId: 1
// });
// console.log(post1.readData('./posts.txt'));
