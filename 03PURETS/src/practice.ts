import {readFile, writeFile} from 'fs'

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
    createNewPost (): string {
        const foulLanguageInTitle = new Foul(this.title).checkForFoulLanguage();
        const foulLanguageInBody = new Foul(this.body).checkForFoulLanguage()

        if (foulLanguageInTitle || foulLanguageInBody) {
            return "Cannot create post, please do not use the following words: fuck, shit, idiot, pussy, useless"
        }

        const newData = {
            id: this.id, 
            title: this.title, 
            body: this.body, 
            commentId: this.commentId
        }
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
        return "You have successfully commented on post";        
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

    // Delete a comment
    deleteComment(id: number) {
        readFile('./comments.txt', 'utf8', (error, data) => {
            if (error) throw error;
            const commentData = JSON.parse(data);

            for (let i = 0; i < commentData.length; i++) {
                if (id === commentData[i].id) {
                    commentData.splice(i, 1); 
                    console.log("Comment has been deleted successfully")
                };
            } 

            writeFile('./comments.txt', JSON.stringify(commentData), (err) => {
                if (err) console.log(err);
            });       
        });
    };
};

class Foul {
    constructor (
        private text: string
    ) {}

    checkForFoulLanguage () {
        const foulWords: string[] = ["fuck", "shit", "idiot", "pussy", "useless"]

        for (let i = 0; i < foulWords.length; i++) {
            if ( this.text.includes(foulWords[i]) ) {
                return foulWords[i]
                // return `Post title or body should not contain foul word + ${foulWords[i]}`
            };
        };
        return false;
    };
};

const post1 = new Post(7, "My seventh post", "This is my seventh good post", 5)

const newPost = post1.createNewPost()

console.log(newPost)

// const checkForFoul = new Foul('An fuckieeee man')
// console.log(checkForFoul.checkForFoulLanguage())

// const comment1 = new Comment(1, 1, "Nice post, good job sir!");
// comment1.deleteComment(3)

// comment1.updateComment(1, "Keep winning brother")

// comment1.createNewComment(2, 1, "This really helped me. thanks a lot")
// comment1.readComment(2)