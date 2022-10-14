import express from "express";
import {handleLogin} from '../controllers/auth.Controller'

//ONLY CHECKS IF EMAIL ADRESS EXISTS IN THE DB. THEREFORE THERES A POSSIBILTY OF HAVING A DUPLICATE USERNAME



const authRouter = express.Router();

authRouter.post('/', handleLogin)

export {authRouter}