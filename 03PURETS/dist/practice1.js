"use strict";
class Posts {
    constructor(details) {
        this.details = details;
    }
    ;
    set post(details) {
        this.details = details;
    }
    ;
    get post() {
        return this.details;
    }
    ;
    updatePost(details) {
        this.details = details;
        return details;
    }
    ;
    deletePost(id) {
        return `Post with id ${id} has been deleted`;
    }
    ;
}
;
