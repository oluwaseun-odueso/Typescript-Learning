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
// const writeeData = (filename, obj) => {
//     return new Promise((resolve, reject) => {
//         const newObj = JSON.stringify(obj)
//         writeFile(filename, newObj, (err, data) => {
//             if (err) throw err;
//         })
//     })
// }
class Posts {
    constructor(details) {
        this.details = details;
    }
    ;
    setPost(filename, details) {
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
    getPost(filename) {
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
