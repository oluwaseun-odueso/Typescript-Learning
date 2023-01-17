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
                if (id === postData[i].id) {
                    console.log(postData[i]);
                };
            };
        })
    }
       
    // Update a post
    updatePost(id: number, title: string, body: string) {
        readFile('./posts.txt', 'utf8', (err, data) => {
            if (err) throw err
            const postData = JSON.parse(data);

            // Check for match and update
            for (let i = 0; i < postData.length; i++) {
                if (id === postData[i].id) {
                    postData[i].title = title;
                    postData[i].body = body
                    console.log("Post has been updated successfully")
                };
            }; 

            writeFile('./posts.txt', JSON.stringify(postData), (err) => {
                if (err) console.log(err);
            });
        });
    };

    // Delete a post
    deletePost(id: number) {
        readFile('./posts.txt', 'utf8', (error, data) => {
            if (error) throw error;
            const postData = JSON.parse(data);

            for (let i = 0; i < postData.length; i++) {
                if (id === postData[i].id) {
                    postData.splice(i, 1); 
                    console.log("Post has been deleted successfully")
                };
            } 

            writeFile('./posts.txt', JSON.stringify(postData), (err) => {
                if (err) console.log(err);
            });       
        });
    };

};

const post1 = new Post (1, "This is my first post", "A review of my career growth in year 2022", 1);

// post1.createNewPost(4, "My fourth new post", "New post 4", 4)

post1.deletePost(4);

// post1.updatePost(5, "My first post", "This is the first post")
// post1.readPost(7)
