"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("../controllers/auth.controller");
//ONLY CHECKS IF EMAIL ADRESS EXISTS IN THE DB. THEREFORE THERES A POSSIBILTY OF HAVING A DUPLICATE USERNAME
const authRouter = express_1.default.Router();
authRouter.post('/', auth_controller_1.handleLogin);
exports.default = authRouter;
//# sourceMappingURL=authentication.routes.js.map