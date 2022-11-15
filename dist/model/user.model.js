"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const joi_1 = __importDefault(require("joi"));
const joi_password_complexity_1 = __importDefault(require("joi-password-complexity"));
const userSchema = new mongoose_1.default.Schema({
    userName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    likes: [{ blogpostId: String }]
});
userSchema.methods.generateAuthToken = function () {
    const token = jsonwebtoken_1.default.sign({ id: this._id }, process.env.JWT_PRIVATE_KEY, {
        expiresIn: "7d",
    });
    return token;
};
const User = mongoose_1.default.model("user", userSchema);
exports.User = User;
const validate = (data) => {
    const schema = joi_1.default.object({
        email: joi_1.default.string().email().required().label("Email"),
        password: (0, joi_password_complexity_1.default)().required().label("Password"),
        userName: joi_1.default.string().required().label("Username"),
    });
    return schema.validate(data);
};
exports.validate = validate;
//# sourceMappingURL=user.model.js.map