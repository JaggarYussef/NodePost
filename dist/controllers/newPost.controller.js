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
exports.tester = exports.createPost = exports.getPost = void 0;
const express_1 = __importDefault(require("express"));
const tokenVerification_1 = __importDefault(require("../middelwares/tokenVerification"));
const user_model_1 = require("../model/user.model");
const date_and_time_1 = __importDefault(require("date-and-time"));
const blogPost_model_1 = __importDefault(require("../model/blogPost.model"));
const app = (0, express_1.default)();
//Here we are configuring express to use body-parser as middle-ware.
app.use(express_1.default.urlencoded({ extended: true }));
// To parse the incoming requests with JSON payloads
app.use(express_1.default.json());
//app.use(cors());
app.use(tokenVerification_1.default);
const getPost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.headers['x-access-token'];
    console.log("emaiiil " + req.body.email);
    res.send('hey');
});
exports.getPost = getPost;
const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const token = req.headers['x-access-token']
    console.log("emaiiil " + req.body.email);
    const userObj = yield user_model_1.User.findOne({ email: req.body.email }, { password: 0 }, (err, response) => {
        if (err)
            return res.status(404).json({ message: 'No user found' });
        //***************** Ask Dante ********************************** */   
        // const userId : typeof response._id = response._id;
        //***************** Ask Dante ********************************** */   
    }).clone();
    const now = new Date();
    const formatedDate = date_and_time_1.default.format(now, 'YYYY/MM/DD HH:mm:ss');
    //    const userTest  : typeof userObj.test= userObj.test;
    const userId = userObj._id;
    const title = req.body.title;
    const content = req.body.content;
    const timeStamp = formatedDate;
    console.log(userId, '\n', title, '\n', content, '\n', timeStamp);
    new blogPost_model_1.default({
        user: userId,
        title: title,
        content: content,
        date: timeStamp,
    }).save();
    res.send({ message: 'Blog has been uploaded' });
});
exports.createPost = createPost;
const tester = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('secondd get');
});
exports.tester = tester;
//# sourceMappingURL=newPost.controller.js.map