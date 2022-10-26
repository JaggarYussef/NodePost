"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRegisteration_controller_1 = require("../controllers/userRegisteration.controller");
const registerationRouter = express_1.default.Router();
registerationRouter.route("/")
    .get(userRegisteration_controller_1.test)
    .post(userRegisteration_controller_1.handleNewUser);
exports.default = registerationRouter;
//# sourceMappingURL=userRegisteration.routes.js.map