import {NoParamCallback, readFile, writeFile} from 'fs'

// Post Interface
interface PostInterface {
    readonly id: number,
    title: string,
    body: string,
    commentId?: number
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

// const writeeData = (filename, obj) => {
//     return new Promise((resolve, reject) => {
//         const newObj = JSON.stringify(obj)
//         writeFile(filename, newObj, (err, data) => {
//             if (err) throw err;
//         })
//     })
// }

class Posts {
    constructor (
        public details: PostInterface
    ) {};

    async setPost (filename: string, details: object) {
        try {
            const newObj: string = JSON.stringify(details);
            writeFile(filename, newObj, (err) => {
                if (err) throw err
            })
        } catch (error) {
            throw error
        }
    }

    async getPost (filename: string) {
        try {
           readFile(filename, 'utf8', (err, data) => {
            if (err) throw err

            const postData = JSON.parse(data);
            return postData;
           }) 
        } catch (error) {
            throw error
        }
    }
    
    // get post(): PostInterface {
    //     // return this.details;

    //     return new Promise((resolve, reject) => {
    //         readFile(filename, 'utf8', (err, data) => {
    //             if (err) throw err;
    
    //             const a = JSON.parse(data);
    //             resolve(a);
    //             reject(new Error)
    //         })  
    //     })
    // };

    updatePost(details: PostInterface): PostInterface {
        this.details = details;
        return details;
    };

    deletePost(id: number): string {
        return `Post with id ${id} has been deleted`;
    };
};