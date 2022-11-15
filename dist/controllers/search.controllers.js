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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBlogPostById = exports.getCommentById = exports.getUserById = exports.getAllUsers = void 0;
const user_model_1 = require("../model/user.model");
const blogPost_model_1 = __importDefault(require("../model/blogPost.model"));
const comment_model_1 = __importDefault(require("../model/comment.model"));
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allUsers = yield user_model_1.User.find();
    res.send(allUsers);
});
exports.getAllUsers = getAllUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.userId;
    const oneUser = yield user_model_1.User.findById(id, { password: 0 });
    res.send(oneUser);
});
exports.getUserById = getUserById;
const getCommentById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.userId;
    const userComments = yield comment_model_1.default.find({ userId: id });
    res.send(userComments);
});
exports.getCommentById = getCommentById;
const getBlogPostById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.userId;
    const userPosts = yield blogPost_model_1.default.find({ user: id });
    res.send(userPosts);
});
exports.getBlogPostById = getBlogPostById;
//# sourceMappingURL=search.controllers.js.map