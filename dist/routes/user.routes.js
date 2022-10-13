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
const bcrypt_1 = __importDefault(require("bcrypt"));
const app = (0, express_1.default)();
const router = express_1.default.Route();
exports.router = router;
//Here we are configuring express to use body-parser as middle-ware.
app.use(express_1.default.urlencoded({ extended: true }));
// To parse the incoming requests with JSON payloads
app.use(express_1.default.json());
//app.use(cors());
router.get("/", (req, res) => {
    //console.log("this req body " + req.body);
    res.json({ user: 'made' });
});
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //console.log(req.body);
    console.log("email: " + req.body.email);
    console.log("password: " + req.body.password);
    try {
        const { error } = (0, user_model_1.validate)(req.body);
        if (error)
            return res.status(400).send({ message: error.details[0].message });
        const user = yield user_model_1.User.findOne({ email: req.body.email });
        if (user)
            return res
                .status(409)
                .send({ message: "User with given email already Exist!" });
        const salt = yield bcrypt_1.default.genSalt(Number(process.env.SALT));
        console.log("this salt: " + salt);
        const hashPassword = yield bcrypt_1.default.hash(req.body.password, salt);
        yield new user_model_1.User(Object.assign(Object.assign({}, req.body), { password: hashPassword })).save();
        res.status(201).send({ message: "User created successfully" });
    }
    catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
}));
//# sourceMappingURL=user.routes.js.map