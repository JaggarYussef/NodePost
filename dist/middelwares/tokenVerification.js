"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyJWT = (req, res, next) => {
    const authHeader = req.headers.Authorization;
    console.log("this is auth header  : " + req.headers);
    if (!(authHeader === null || authHeader === void 0 ? void 0 : authHeader.startsWith('Bearer '))) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    const token = authHeader.split(' ')[1];
    console.log('this is token : ' + token);
    jsonwebtoken_1.default.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err)
            return res.status(403).json({ message: 'Forbidden' });
        console.log("verifyJWTS: decoded email= " + decoded.email);
        req.body.email = decoded.email;
        // next()
    });
};
exports.default = verifyJWT;
//# sourceMappingURL=tokenVerification.js.map