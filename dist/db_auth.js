"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const mongoose_1 = __importDefault(require("mongoose"));
const connect = () => {
    try {
        mongoose_1.default.connect(process.env.MONGODB_ACCESS, { family: 4 }, () => {
            console.log('connected to database successfuly');
        });
    }
    catch (error) {
        console.log("Couldn't connect to Database");
        console.error(error.message);
    }
};
exports.default = connect;
//# sourceMappingURL=db_auth.js.map