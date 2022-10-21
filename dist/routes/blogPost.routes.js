"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const newPost_controller_1 = require("../controllers/newPost.controller");
const newPostRouter = express_1.default.Router();
newPostRouter.route('/')
    .get(newPost_controller_1.getPost)
    .post(newPost_controller_1.createPost);
exports.default = newPostRouter;
//# sourceMappingURL=blogPost.routes.js.map