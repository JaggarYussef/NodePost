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
exports.getLikedPosts = exports.likePost = void 0;
const express_1 = __importDefault(require("express"));
const user_model_1 = require("../model/user.model");
const app = (0, express_1.default)();
//Here we are configuring express to use body-parser as middle-ware.
app.use(express_1.default.urlencoded({ extended: true }));
// To parse the incoming requests with JSON payloads
app.use(express_1.default.json());
//app.use(cors());
const likePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield user_model_1.User.findOne({ email: req.body.email }, (err, ressponse) => {
        if (err)
            res.status(404).json({ message: err.message });
        ressponse.likes.push({ blogpostId: req.params.blogpostId });
        ressponse.save();
    }).clone();
});
exports.likePost = likePost;
const getLikedPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("getlikes called ");
    const likedPosts = yield user_model_1.User.findOne({ email: req.body.email }, (err, ressponse) => {
        if (err)
            res.status(404).json({ message: err.message });
    }).clone();
    res.send(likedPosts.likes);
});
exports.getLikedPosts = getLikedPosts;
//# sourceMappingURL=likePost.controller.js.map