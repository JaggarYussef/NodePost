"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const cors = require("cors");
const app = (0, express_1.default)();
//middleware
app.use(express_1.default.json());
app.use(cors());
const port = process.env.PORT;
app.listen(port, () => console.log(`Server is running on PORT ${port}`));
app.get("/", (req, res) => {
    res.send('first page');
});
//# sourceMappingURL=server.js.map