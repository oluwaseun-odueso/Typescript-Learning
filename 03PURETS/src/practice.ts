import {readFile, writeFile} from 'fs'
import { threadId } from 'worker_threads';

class Post {
    constructor (
        private readonly id: number,
        private title: string,
        private body: string,
        private commentId?: number
    ) {};
    
    // Write data
    private writeData (filename: string, newData: {}) {
        readFile(filename, 'utf8', (err, data) => {
            if (err) throw err
            
            const postData = JSON.parse(data);

            // Update the list with the new data
            postData.push(newData)

            // Write data back to file
            writeFile(filename, JSON.stringify(postData), (err) => {
                if (err) console.log(err);
            })
        });
    };

    // Create new post
    createNewPost (id: number = this.id, title: string = this.title, body: string = this.body, commentId?: number): string {
        const newData = {id, title, body, commentId}
        this.writeData('./posts.txt', newData)
        return "Post uploaded successfully";        
    };

    // Read data
    readPost (id: number, filename: string): any {
        readFile(filename, 'utf8', (error, data) => {
            if (error) throw error;
            const retrievedData = JSON.parse(data);

            for (let i = 0; i < retrievedData.length; i++) {
                if (id == retrievedData[i].id) {
                    console.log(retrievedData[i]);
                };
            };
        })
    }
        
    // Get a post
    // getPost (id: number) {
    //     const posts = this.readData(id, './posts.txt');
    //         console.log('a')
    //         console.log(posts)
    //         for (let i = 0; i < posts.length; i++) {
    //             if (id == posts[i].id) {
    //                 return (posts[i]);
    //             };
    //         };
    //         return "Post does not exist";
    // };
    
    // // Update a post
    // updatePost(id: number, title: string, body: string) {
    //     const posts = this.readData('./posts.txt');
    //         for (let i = 0; i < posts.length; i++) {
    //             if (id === posts[i].id) {
    //                 posts[i].title = title;
    //                 posts[i].body = body
    //                 this.writeData('./posts.txt', posts)
    //                 return "Post has been successfully updated"
    //             };
    //         } return "Post does not exist";
    // };

//     // Delete a post
//     deletePost(id: number) {
//         const posts = this.readData('./posts.txt');
//             for (let i = 0; i < posts.length; i++) {
//                 if (id === posts[i].id) {
//                     posts.splice(i, 1); 
//                     this.writeData('./posts.txt', posts)
//                     return "Post has been deleted"
//                 };
//             } return "Post does not exist";
//     };
};

const post1 = new Post (1, "This is my first post", "A review of my career growth in year 2022", 1);

post1.readPost(3, './posts.txt')

// console.log(data);