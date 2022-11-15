"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tokenVerification_1 = __importDefault(require("../middelwares/tokenVerification"));
const comment_controller_1 = require("../controllers/comment.controller");
const commentRouter = express_1.default.Router();
commentRouter.route('/')
    .post(tokenVerification_1.default, comment_controller_1.postComment);
exports.default = commentRouter;
//# sourceMappingURL=comment.routes.js.map