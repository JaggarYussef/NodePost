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
exports.createPost = void 0;
const user_model_1 = require("../model/user.model");
const date_and_time_1 = __importDefault(require("date-and-time"));
const blogPost_model_1 = __importDefault(require("../model/blogPost.model"));
const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userObj = yield user_model_1.User.findOne({ email: req.body.email }, { password: 0 }, (err, response) => {
        if (err)
            return res.status(404).json({ message: 'No user found' });
    }).clone();
    const now = new Date();
    const formatedDate = date_and_time_1.default.format(now, 'YYYY/MM/DD HH:mm:ss');
    //    const userTest  : typeof userObj.test= userObj.test;
    const userId = userObj._id;
    const title = req.body.title;
    const content = req.body.content;
    const timeStamp = formatedDate;
    // console.log(userId, '\n', title, '\n', content,'\n', timeStamp);
    new blogPost_model_1.default({
        user: userId,
        title: title,
        content: content,
        date: timeStamp,
    }).save((err, response) => {
        if (err)
            return res.json({ message: err.message });
        res.send({ message: `blogpost with id: ${response._id} has been added` });
    });
});
exports.createPost = createPost;
//# sourceMappingURL=newPost.controller.js.map