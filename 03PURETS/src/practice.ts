import {readFile, writeFile} from 'fs'

class Post {
    constructor (
        private readonly id: number,
        private title: string,
        private body: string,
        private commentId?: number
    ) {};
    
    // Write data
    writeData (filename: string, newData: {}) {
        readFile(filename, 'utf8', (err, data) => {
            if (err) throw err

            const postData = JSON.parse(data);
            const list1 = []
            for(let i = 0; i < postData.length; i++) {
                const element = postData[i]
                list1.push(element)
            }

            // Update the list with the new data
            list1.push(newData)

            // Write data back to file
            writeFile(filename, JSON.stringify(list1), (err) => {
                if (err) console.log(err);
            })
        });
    };
    
    // Get a post
    // getPost (id: number) {
    //     const posts = this.readData('./posts.txt');
    //         console.log('a')
    //         console.log(posts)
    //         for (let i = 0; i < posts.length; i++) {
    //             if (id == posts[i].id) {
    //                 return (posts[i]);
    //             };
    //         };
    //         return "Post does not exist";
    // };

    // // Create new post
    // createNewPost (id: number = this.id, title: string = this.title, body: string = this.body, commentId: number ) {
    //     const currentData: {id: number, title: string, body: string, commentId: number}[] | null = this.readData('./posts.txt')
    //     currentData.push({id, title, body, commentId})
    //     this.writeData('./posts.txt', currentData);
    //     return "Post uploaded successfully";        
    // };

    // Check if post exists
    // confirmPostId(id: number) {
    //     const posts = this.readData('./posts.txt');
    //         for (let i = 0; i < posts.length; i++) {
    //             if (id === posts[i].id) {
    //                 return true;
    //             };
    //         } return false;
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

post1.writeData('./posts.txt', {
    id: 3,
    title: "My third new post",
    body: "A summary of my Career Development in 2022 Part Three",
    commentId: 3
})

// post1.writeData('./posts.txt', {
//     id: 1,
//     title: "My second new post",
//     body: "A summary of my Career Development in 2022 Part Two",
//     commentId: 1
// });

// console.log(post1.readData('./posts.txt'));