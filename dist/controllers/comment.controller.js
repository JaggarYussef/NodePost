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
exports.postComment = exports.getComments = void 0;
const express_1 = __importDefault(require("express"));
const blogPost_model_1 = __importDefault(require("../model/blogPost.model"));
const user_model_1 = require("../model/user.model");
const date_and_time_1 = __importDefault(require("date-and-time"));
const comment_model_1 = __importDefault(require("../model/comment.model"));
const app = (0, express_1.default)();
//Here we are configuring express to use body-parser as middle-ware.
app.use(express_1.default.urlencoded({ extended: true }));
// To parse the incoming requests with JSON payloads
app.use(express_1.default.json());
//app.use(cors());
const postComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userobjID = yield user_model_1.User.findOne({ email: req.body.email }, { password: 0 }, (err, response) => {
        if (err)
            return res.status(404).json({ message: 'No user found' });
    }).clone();
    const now = new Date();
    const formatedDate = date_and_time_1.default.format(now, 'YYYY/MM/DD HH:mm:ss');
    const newComment = yield new comment_model_1.default({
        userId: userobjID._id,
        blogPostId: req.params.blogpostId,
        content: req.body.commentContent,
        date: formatedDate
    }).save();
    // await blogPost.findByIdAndUpdate({_id: req.params.blogpostId}, {comments : newComment._id},(err, response) => {
    //     if(err) res.status(404).json({message : err.message})
    //     console.log("blogpost id + " + req.params.blogpostId);
    //     console.log('comment id :' + newComment._id);
    // }).clone()
    yield blogPost_model_1.default.findOne({ _id: req.params.blogpostId }, (err, response) => {
        if (err)
            res.status(404).json({ message: err.message });
        console.log('from inside ' + response.title);
        console.log('comment id :' + newComment._id);
        response.comments.push({ commentId: newComment._id });
        response.title = "mofifed";
        response.save();
    }).clone();
    res.status(200).send('commented posted');
});
exports.postComment = postComment;
const getComments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("getlikes comments ");
    const commentsArray = yield blogPost_model_1.default.find({ _id: req.params.blogpostId }, (err, response) => {
        if (err)
            res.status(404).json({ message: err.message });
    }).clone();
    // res.send("commentsArray.comments")
    res.send(commentsArray);
});
exports.getComments = getComments;
//# sourceMappingURL=comment.controller.js.map