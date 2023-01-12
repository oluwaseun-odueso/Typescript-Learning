"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
class Posts {
    constructor(details) {
        this.details = details;
    }
    ;
    // Write data
    writeData(filename, details) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newObj = JSON.stringify(details);
                (0, fs_1.writeFile)(filename, newObj, (err) => {
                    if (err)
                        throw err;
                });
            }
            catch (error) {
                throw error;
            }
        });
    }
    // Read data
    readData(filename) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                (0, fs_1.readFile)(filename, 'utf8', (err, data) => {
                    if (err)
                        throw err;
                    const postData = JSON.parse(data);
                    return postData;
                });
            }
            catch (error) {
                throw error;
            }
        });
    }
    // get post
    getPost(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const posts = yield this.readData('./posts.txt');
                for (let i = 0; i < posts.length; i++) {
                    if (id == posts[i].id) {
                        return (posts[i]);
                    }
                    ;
                }
                ;
            }
            catch (error) {
                throw error;
            }
        });
    }
    setPost(details) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.writeData('./posts.txt', details);
                return "Post uploaded successfully";
            }
            catch (error) {
                throw error;
            }
        });
    }
    checkId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // const data: PostInterface[] = []
                const data = yield this.readData('./posts.txt');
                for (let i = 0; i < data.length; i++) {
                    if (id == data[i].id) {
                        return true;
                    }
                }
            }
            catch (error) {
                throw error;
            }
        });
    }
    updatePost(id, details) {
        return __awaiter(this, void 0, void 0, function* () {
            // const checkId = await this.checkId(id);
            switch (yield this.checkId(id)) {
                case true:
                    return "";
                case undefined:
                    return "Post does not exist";
            }
            // return details;
        });
    }
    ;
    deletePost(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const checkId = yield this.checkId(id);
            if (checkId == true) {
                // Delete post
            }
            else {
                return "Post does not exist";
            }
            return `Post with id ${id} has been deleted`;
        });
    }
    ;
}
;
