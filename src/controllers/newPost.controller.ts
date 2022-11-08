import { log } from "console";
import express, { NextFunction, Request, response, Response } from "express"
import mongoose, { Schema } from "mongoose";
import verifyJWT from "../middelwares/tokenVerification";
import { Jwt } from "jsonwebtoken";
import { User } from "../model/user.model";
import date from 'date-and-time'
import blogPost from "../model/blogPost.model";
import { IUser } from "../interfaces/interfaces";


const app =  express();
//Here we are configuring express to use body-parser as middle-ware.
app.use(express.urlencoded({extended: true}));
// To parse the incoming requests with JSON payloads
app.use(express.json());
//app.use(cors());
app.use(verifyJWT)

interface IAuthRequest extends Request {headers: {Authorization : string}}

const getPost = async (req : IAuthRequest, res : Response, next : NextFunction) => {
    
    const token = req.headers['x-access-token']
    
    console.log("emaiiil " + req.body.email);
    res.send('hey')
    
}


const createPost = async (req : Request, res : Response)=> {
   // const token = req.headers['x-access-token']
 

    const userObj : any  = await User.findOne({email : req.body.email }, {password:  0 }, (err, response) => {


        if (err) return res.status(404).json({ message: 'No user found' });
        
    }).clone()



    const now = new Date();
    const formatedDate = date.format(now, 'YYYY/MM/DD HH:mm:ss')
   
 
//    const userTest  : typeof userObj.test= userObj.test;

    const userId  : any = userObj._id;
    const title   : String = req.body.title;
    const content : String = req.body.content;
    const timeStamp = formatedDate;

    // console.log(userId, '\n', title, '\n', content,'\n', timeStamp);
    
     new blogPost({
        user : userId,
        title: title,
        content: content,
        date: timeStamp,
        
     }).save((err, response) => {
       if (err) return res.json({message: err.message });
 
       
       res.send({message: `blogpost with id: ${response._id} has been added`})

     })

    //  blogPost.create({
    //     user : userId,
    //     title: title,
    //     content: content,
    //     date: timeStamp,
    //  }), (err) => {
    //     if (err) return res.json({message: err.message });

    //  }


    
    

}





export {getPost, createPost}