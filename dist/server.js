"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const cors = require("cors");
const db_auth_1 = __importDefault(require("./db_auth"));
const userRegisteration_routes_1 = __importDefault(require("./routes/userRegisteration.routes"));
const authentication_routes_1 = __importDefault(require("./routes/authentication.routes"));
const blogPost_routes_1 = __importDefault(require("./routes/blogPost.routes"));
//Database
(0, db_auth_1.default)();
const port = process.env.PORT;
const app = (0, express_1.default)();
//Middleware
//Configuring express to use body-parser as middle-ware.
app.use(express_1.default.json());
app.use(cors());
//Routes
app.use('/api/authenticate', authentication_routes_1.default);
app.use('/api/registeration', userRegisteration_routes_1.default);
app.use('/api/blogpost', blogPost_routes_1.default);
app.listen(port, () => console.log(`Server is running on PORT ${port}`));
//# sourceMappingURL=server.js.map