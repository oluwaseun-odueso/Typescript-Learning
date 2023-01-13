import {readFile, writeFile} from 'fs'

// Post Interface
interface PostInterface {
    readonly id: number,
    title: string,
    body: string,
    commentId?: number
}

// Post update interface
interface postUpdateInterface {
    title: string,
    body: string
}

// Comments Interface
interface CommentInterface {
    readonly id: number,
    postId: number,
    text: string
}

// Enums for foul languages
const enum FoulLanguages {
    fuck,
    shit,
    idiot,
    pussy,
    useless
}

class Posts {
    constructor (
        public details: PostInterface
    ) {};
    
    // Write data
    writeData (filename: string, details: PostInterface) {
        const newObj: string = JSON.stringify(details);
        writeFile(filename, newObj, (err) => {
            if (err) throw err
        })
    };

    // Read data
    readData (filename: string): any {
        readFile(filename, 'utf8', (err, data) => {
        if (err) throw err

        const postData = JSON.parse(data);
        return postData;
        }) 
        
    }
    
    // Get a post
    async getAPost (id: number) {
        try {
            const posts = await this.readData('./posts.txt');
            for (let i = 0; i < posts.length; i++) {
                if (id == posts[i].id) {
                    return (posts[i]);
                } return "Post does not exist";
            };
        } catch (error) {
            throw error
        }
    }
    
    // Create new post
    async createNewPost (details: PostInterface): Promise<string> {
        try {
            this.writeData('./posts.txt', details)
            return "Post uploaded successfully";
        } catch (error) {
            throw error
        }
    }

    // Check if post exists
    async confirmPostId(id: number) {
        try {
            const posts = await this.readData('./posts.txt');
            for (let i = 0; i < posts.length; i++) {
                if (id === posts[i].id) {
                    return true;
                } return false;
            };
        } catch (error) {
            throw error;
        };
    };
    
    // Update a post
    async updatePost(id: number, details: postUpdateInterface) {
        try {
            const posts = await this.readData('./posts.txt');
            for (let i = 0; i < posts.length; i++) {
                if (id === posts[i].id) {
                    posts[i].title = details.title;
                    posts[i].body = details.body
                    this.writeData('./posts.txt', posts)
                    return "Post has been successfully updated"
                };
            } return "Post does not exist";
        } catch (error) {
            throw error;
        };
    };

    // Delete a post
    async deletePost(id: number) {
        try {
            const posts = await this.readData('./posts.txt');
            for (let i = 0; i < posts.length; i++) {
                if (id === posts[i].id) {
                    posts.splice(i, 1); 
                    this.writeData('./posts.txt', posts)
                    return "Post has been deleted"
                };
            } return "Post does not exist";
        } catch (error) {
            throw error;
        };
    };
    
};