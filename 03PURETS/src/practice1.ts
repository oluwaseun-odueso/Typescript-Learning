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

class Posts {
    constructor (
        public details: PostInterface
    ) {};

    set post(details) {
        this.details = details;
    };
    
    get post(): PostInterface {
        return this.details;
    };

    updatePost(details: PostInterface): PostInterface {
        this.details = details;
        return details;
    };

    deletePost(id: number): string {
        return `Post with id ${id} has been deleted`;
    };
};