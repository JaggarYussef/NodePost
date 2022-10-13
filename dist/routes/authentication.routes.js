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
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const user_model_1 = require("../model/user.model");
const joi_1 = __importDefault(require("joi"));
const bcrypt_1 = __importDefault(require("bcrypt"));
//ONLY CHECKS IF EMAIL ADRESS EXISTS IN THE DB. THEREFORE THERES A POSSIBILTY OF HAVING A DUPLICATE USERNAME
const router = express_1.default.Router();
exports.router = router;
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        //check if password valid
        const validPassword = yield bcrypt_1.default.compare(req.body.password, user.password);
        if (!validPassword) {
            return res.status(401).send({ message: "Invalid Email or Password" });
        }
        const token = user.generateAuthToken();
        res.status(200).send({ data: token, message: "logged in successfully" });
    }
    catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
}));
const validate = (data) => {
    const schema = joi_1.default.object({
        email: joi_1.default.string().email().required().label("Email"),
        password: joi_1.default.string().required().label("Password"),
    });
    return schema.validate(data);
};
//# sourceMappingURL=authentication.routes.js.map