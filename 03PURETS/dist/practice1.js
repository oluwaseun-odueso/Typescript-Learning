"use strict";
// import {readFile, writeFile} from 'fs'
// // Post Interface
// interface PostInterface {
//     readonly id: number,
//     title: string,
//     body: string,
//     commentId?: number
// }
// // Post update interface
// interface postUpdateInterface {
//     title: string,
//     body: string
// }
// // Comments Interface
// interface CommentInterface {
//     readonly id: number,
//     postId: number,
//     text: string
// }
// // Enums for foul languages
// const enum FoulLanguages {
//     fuck,
//     shit,
//     idiot,
//     pussy,
//     useless
// }
// class Posts {
//     constructor (
//         public details: PostInterface
//     ) {};
//     // Write data
//     async writeData (filename: string, details: PostInterface) {
//         try {
//             const newObj: string = JSON.stringify(details);
//             writeFile(filename, newObj, (err) => {
//                 if (err) throw err
//             })
//         } catch (error) {
//             throw error
//         }
//     }
//     // Read data
//     async readData (filename: string) {
//         try {
//            readFile(filename, 'utf8', (err, data) => {
//             if (err) throw err
//             const postData = JSON.parse(data);
//             return postData;
//            }) 
//         } catch (error) {
//             throw error
//         }
//     }
//     // get post
//     async getPost (id: number) {
//         try {
//             const posts = await this.readData('./posts.txt');
//             for (let i = 0; i < posts.length; i++) {
//                 if (id == posts[i].id) {
//                     return (posts[i]);
//                 };
//             };
//         } catch (error) {
//             throw error
//         }
//     }
//     async setPost (details: PostInterface): Promise<string> {
//         try {
//             await this.writeData('./posts.txt', details)
//             return "Post uploaded successfully"
//         } catch (error) {
//             throw error
//         }
//     }
//     async checkId(id: number) {
//         try {
//             // const data: PostInterface[] = []
//             const data = await this.readData('./posts.txt');
//             for (let i = 0; i < data.length; i++) {
//                 if (id == data[i].id) {
//                     return true
//                 }
//             }
//         } catch (error) {
//             throw error
//         }
//     }
//     async updatePost(id: number, details: postUpdateInterface) {
//         // const checkId = await this.checkId(id);
//         switch(await this.checkId(id)) {
//             case true:
//                 return ""
//             case undefined:
//                 return "Post does not exist"
//         }
//         // return details;
//     };
//     async deletePost(id: number) {
//         const checkId = await this.checkId(id);
//         if (checkId == true) {
//             // Delete post
//         } else {
//             return "Post does not exist"
//         }
//         return `Post with id ${id} has been deleted`;
//     };
// };
