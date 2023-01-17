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
    readPost (id: number): any {
        readFile('./posts.txt', 'utf8', (error, data) => {
            if (error) throw error;
            const postData = JSON.parse(data);

            // Check for match
            for (let i = 0; i < postData.length; i++) {
                if (id == postData[i].id) {
                    console.log(postData[i]);
                };
            } console.log('Post does not exist')
        })
    }
       
    // Update a post
    updatePostProcess(id: number, title: string, body: string) {
        readFile('./posts.txt', 'utf8', (err, data) => {
            if (err) throw err
            const postData = JSON.parse(data);

            // Check for match and update
            for (let i = 0; i < postData.length; i++) {
                if (id === postData[i].id) {
                    postData[i].title = title;
                    postData[i].body = body
                };
            };

            writeFile('./posts.txt', JSON.stringify(postData), (err) => {
                if (err) console.log(err);
            })

            // return "Post has been updated successfully"
        }) 
        // return "Could not update post"
    };

    updatePost(id: number, title: string, body: string) {
        this.updatePostProcess(id, title, body);
        return "Post has been updated successfully"
    }
    

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

const data = post1.updatePost(1, "New Post", "This is the new post")

// post1.readPost(6)

console.log(data);
