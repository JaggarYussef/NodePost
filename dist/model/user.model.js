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
exports.validate = exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
//import { Schema, model, connect } from 'mongoose';
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const joi_1 = __importDefault(require("joi"));
const joi_password_complexity_1 = __importDefault(require("joi-password-complexity"));
const userSchema = new mongoose_1.default.Schema({
    userName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});
userSchema.methods.generateAuthToken = function () {
    const token = jsonwebtoken_1.default.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
        expiresIn: "7d",
    });
    return token;
};
userSchema.methods.generateAuthToken = function () {
    const token = jsonwebtoken_1.default.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
        expiresIn: "7d",
    });
    return token;
};
const User = mongoose_1.default.model("user", userSchema);
exports.User = User;
const validate = (data) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('this is data efore joi ' + data.email + " " + data.password);
    const schema = joi_1.default.object({
        userName: joi_1.default.string().email().required().label("Username"),
        email: joi_1.default.string().email().required().label("Email"),
        password: (0, joi_password_complexity_1.default)().required().label("Password")
    });
    console.log("this is schema: " + (yield schema.validate(data)));
    return yield schema.validate(data);
});
exports.validate = validate;
//# sourceMappingURL=user.model.js.map