require("dotenv").config();
import express from "express";
import cors= require('cors');
import connect from './db_auth';
import userRouter from './routes/userRegisteration.routes'
import {authRouter} from "./routes/authentication.routes";

const app = express();
connect.connect()
//middleware
app.use(express.json());
app.use(cors());

const port= process.env.PORT;

app.listen(port, () => console.log(`Server is running on PORT ${port}`))

app.get("/", (req, res) => {
    res.send('first page')
})

app.use('/api/authenticate', authRouter)
app.use('./api/registeration', userRouter)