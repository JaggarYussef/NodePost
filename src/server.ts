require("dotenv").config();
import express from "express";
import cors= require('cors');
import connect from './db_auth';
import userRouter from './routes/userRegisteration.routes'
import authRouter from "./routes/authentication.routes";
import newPostRouter from './routes/blogPost.routes'
import commentRouter from './routes/comment.routes';
//Database
connect();

const port= process.env.PORT;
const app = express();


//Middleware

//Configuring express to use body-parser as middle-ware.
app.use(express.json());
app.use(cors());



//Routes
app.use('/api/auth', authRouter);
app.use('/api/regis', userRouter);
app.use('/api/blogpost', newPostRouter );
app.use('/api/comment', commentRouter );

app.listen(port, () => console.log(`Server is running on PORT ${port}`))
 

