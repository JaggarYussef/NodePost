require("dotenv").config();
import express from "express";
import cors= require('cors');
import connect from './db_auth';
import userRouter from './routes/userRegisteration.routes'
import authRouter from "./routes/authentication.routes";
//Database
connect();

const port= process.env.PORT;
const app = express();


//Middleware

//Configuring express to use body-parser as middle-ware.
app.use(express.json());
app.use(cors());



//Routes
app.use('/api/authenticate', authRouter)
app.use('/api/registeration', userRouter)

app.listen(port, () => console.log(`Server is running on PORT ${port}`))
 

