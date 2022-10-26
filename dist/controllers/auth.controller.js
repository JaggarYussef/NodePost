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
exports.handleLogin = void 0;
const user_model_1 = require("../model/user.model");
const joi_1 = __importDefault(require("joi"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const handleLogin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //check for error
        const { error } = validate(req.body);
        if (error) {
            return res.status(400).send({ message: error.details[0].message });
        }
        //check if user exists 
        const user = yield user_model_1.User.findOne({ email: req.body.email });
        if (!user) {
            return res.status.apply(401).send({ message: "invalid email or password" });
        }
        console.log("req.body password= " + req.body.password);
        console.log("user password= " + user.password);
        //check if password valid
        const validPassword = yield bcrypt_1.default.compare(req.body.password, user.password);
        if (!validPassword) {
            return res.status(401).send({ message: "Invalid Email or Password" });
        }
        //create and sign JWT token with user.Name?
        const accessToken = jsonwebtoken_1.default.sign({ email: user.email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '20h' });
        //const token = user.generateAuthToken();
        res.status(200).send({ data: accessToken, message: "logged in successfully" });
    }
    catch (error) {
        res.send({ message: error.message });
    }
});
exports.handleLogin = handleLogin;
// const handleLogout = (req, res) => {
//     const cookies = req.cookies;
//     if (!cookies?.jwt) return res.sendStatus(204); //No content
//     res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
//     res.json({ message: 'Cookie cleared' });
//   };
const validate = (data) => {
    const schema = joi_1.default.object({
        email: joi_1.default.string().email().required().label('Email'),
        password: joi_1.default.string().required().label('Password'),
        userName: joi_1.default.string().required().label("Username"),
    });
    return schema.validate(data);
};
//# sourceMappingURL=auth.controller.js.map