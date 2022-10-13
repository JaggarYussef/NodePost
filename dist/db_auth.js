"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
require('dotenv').config();
const mongoose_1 = __importDefault(require("mongoose"));
const connect = () => {
    try {
        mongoose_1.default.connect(process.env.DB, () => {
            console.log('connected to database successfuly');
        });
    }
    catch (error) {
        console.log("Couldn't connect to Database");
        console.error(error.message);
    }
};
exports.connect = connect;
//# sourceMappingURL=db_auth.js.map