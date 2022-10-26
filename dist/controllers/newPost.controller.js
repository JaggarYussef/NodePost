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
exports.createPost = exports.getPost = void 0;
const express_1 = __importDefault(require("express"));
const tokenVerification_1 = __importDefault(require("../middelwares/tokenVerification"));
const app = (0, express_1.default)();
//Here we are configuring express to use body-parser as middle-ware.
app.use(express_1.default.urlencoded({ extended: true }));
// To parse the incoming requests with JSON payloads
app.use(express_1.default.json());
//app.use(cors());
app.use(tokenVerification_1.default);
const getPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body.email);
});
exports.getPost = getPost;
const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const title = req.body.title;
    const content = req.body.content;
    const date = req.body.date;
});
exports.createPost = createPost;
//# sourceMappingURL=newPost.controller.js.map