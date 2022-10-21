import { log } from "console";
import express, { NextFunction, Request, Response } from "express"
import { Date } from "mongoose";
import verifyJWT from "../middelwares/tokenVerification";


const app =  express();
//Here we are configuring express to use body-parser as middle-ware.
app.use(express.urlencoded({extended: true}));
// To parse the incoming requests with JSON payloads
app.use(express.json());
//app.use(cors());
app.use(verifyJWT)

interface IAuthRequest extends Request {headers: {Authorization : string}}

const getPost = async (req : IAuthRequest, res : Response, next : NextFunction) => {
    verifyJWT(req, res,  next);
    console.log(req.body.email);

    
}


const createPost = async (req : Request, res : Response)=> {

    
    const title : String = req.body.title;
    const content : String = req.body.content;
    const date : Date = req.body.date;

}


export {getPost, createPost}