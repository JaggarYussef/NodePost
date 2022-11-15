"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const newPost_controller_1 = require("../controllers/newPost.controller");
const tokenVerification_1 = __importDefault(require("../middelwares/tokenVerification"));
const comment_controller_1 = require("../controllers/comment.controller");
const likePost_controller_1 = require("../controllers/likePost.controller");
const newPostRouter = express_1.default.Router();
newPostRouter.route('/')
    .get(tokenVerification_1.default, newPost_controller_1.getPost)
    .post(tokenVerification_1.default, newPost_controller_1.createPost);
newPostRouter.route('/:blogpostId')
    .post(tokenVerification_1.default, comment_controller_1.postComment)
    .get(tokenVerification_1.default, comment_controller_1.getComments);
newPostRouter.route('/:blogpostId/like')
    .post(tokenVerification_1.default, likePost_controller_1.likePost)
    .get(tokenVerification_1.default, likePost_controller_1.getLikedPosts);
exports.default = newPostRouter;
//# sourceMappingURL=blogPost.routes.js.map