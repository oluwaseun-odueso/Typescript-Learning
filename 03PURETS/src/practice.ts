import {readFile, writeFile} from 'fs'

class Post {
    private foulWords: string[] = ["fuck", "shit", "pussy", "useless"]
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

        // for (let i = 0; i < this.foulWords.length; i++) {
        //     if (title.includes(this.foulWords[i]) || body.includes(this.foulWords[i]) ) {
        //         return `Post title or body should not contain foul word + ${this.foulWords[i]}`
        //     };
        // };

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

class Comment {
    constructor (
        private id: number, 
        private postId: number, 
        private text: string
    ) {};

    // Helper method to comment on post
    private writeComment (newData: {}) {
        readFile('./comments.txt', 'utf8', (err, data) => {
            if (err) throw err
            
            const postData = JSON.parse(data);

            // Update the list with the new data
            postData.push(newData)

            // Write data back to file
            writeFile('./comments.txt', JSON.stringify(postData), (err) => {
                if (err) console.log(err);
            })
        });
    };

    // Write new comment on post
    createNewComment (id: number = this.id, postId: number = this.postId, text: string = this.text): string {
        const newData = {id, postId, text}
        this.writeComment(newData)
        return "You have successfully commented on this post";        
    };

    // Get/read comment
    readComment (id: number): any {
        readFile('./comments.txt', 'utf8', (error, data) => {
            if (error) throw error;
            const commentData = JSON.parse(data);

            // Check for match
            for (let i = 0; i < commentData.length; i++) {
                if (id === commentData[i].id) {
                    console.log(commentData[i]);
                };
            };
        })
    }
    
    // Update a comment
    updateComment(id: number, text: string) {
        readFile('./comments.txt', 'utf8', (err, data) => {
            if (err) throw err
            const commentData = JSON.parse(data);

            // Check for match and update
            for (let i = 0; i < commentData.length; i++) {
                if (id === commentData[i].id) {
                    commentData[i].text = text;
                    console.log("Comment has been updated successfully");
                };
            }; 

            writeFile('./comments.txt', JSON.stringify(commentData), (err) => {
                if (err) console.log(err);
            });
        });
    };
};

const comment1 = new Comment(1, 1, "Nice post, good job sir!");
comment1.updateComment(1, "Keep winning brother")

// comment1.createNewComment(2, 1, "This really helped me. thanks a lot")
// comment1.readComment(2)