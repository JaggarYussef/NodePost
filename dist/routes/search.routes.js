"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tokenVerification_1 = __importDefault(require("../middelwares/tokenVerification"));
const search_controllers_1 = require("../controllers/search.controllers");
const searchRouter = express_1.default.Router();
searchRouter.route('/getAllUsers').get(tokenVerification_1.default, search_controllers_1.getAllUsers);
searchRouter.route('/:userId').get(tokenVerification_1.default, search_controllers_1.getUserById);
searchRouter.route('/:userId/postsByUser').get(tokenVerification_1.default, search_controllers_1.getBlogPostById);
searchRouter.route('/:userId/commentsByUser').get(tokenVerification_1.default, search_controllers_1.getCommentById);
exports.default = searchRouter;
//# sourceMappingURL=search.routes.js.map