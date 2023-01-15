import {readFile, writeFile} from 'fs'

class Post {
    constructor (
        private readonly id: number,
        private title: string,
        private body: string,
        private commentId?: number
    ) {};
    
    // Write data
    writeData (filename: string, details: object) {
        const newObj: string = JSON.stringify(details);
        writeFile(filename, newObj, (err) => {
            if (err) throw err
        });
    };

    // Read data
    readData (filename: string): any {
        readFile(filename, 'utf8', (err, data) => {
            if (err) throw err;

            const postData = JSON.parse(data);
            console.log(postData);
            return postData;
        });
    };
    
    // Get a post
    getPost (id: number) {
        const posts = this.readData('./posts.txt');
            console.log('a')
            console.log(posts)
            for (let i = 0; i < posts.length; i++) {
                if (id == posts[i].id) {
                    return (posts[i]);
                };
            };
            return "Post does not exist";
    };

    // Create new post
    createNewPost (id: number = this.id, title: string = this.title, body: string = this.body, commentId: number) {
        const currentData = this.readData('./posts.txt')
        const newData: object[]  = currentData.push({id, title, body, commentId})
        this.writeData('./posts.txt', newData);
        return "Post uploaded successfully";
    };

    // Check if post exists
    confirmPostId(id: number) {
        const posts = this.readData('./posts.txt');
            for (let i = 0; i < posts.length; i++) {
                if (id === posts[i].id) {
                    return true;
                };
            } return false;
    };
    
    // Update a post
    updatePost(id: number, title: string, body: string) {
        const posts = this.readData('./posts.txt');
            for (let i = 0; i < posts.length; i++) {
                if (id === posts[i].id) {
                    posts[i].title = title;
                    posts[i].body = body
                    this.writeData('./posts.txt', posts)
                    return "Post has been successfully updated"
                };
            } return "Post does not exist";
    };

    // Delete a post
    deletePost(id: number) {
        const posts = this.readData('./posts.txt');
            for (let i = 0; i < posts.length; i++) {
                if (id === posts[i].id) {
                    posts.splice(i, 1); 
                    this.writeData('./posts.txt', posts)
                    return "Post has been deleted"
                };
            } return "Post does not exist";
    };
};

