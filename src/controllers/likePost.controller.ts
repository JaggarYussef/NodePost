import express, { response } from "express";
import blogPost from "../model/blogPost.model";
import { User } from "../model/user.model";
import date from 'date-and-time'
import comment from "../model/comment.model";


const app =  express();
//Here we are configuring express to use body-parser as middle-ware.
app.use(express.urlencoded({extended: true}));
// To parse the incoming requests with JSON payloads
app.use(express.json());
//app.use(cors());


const likePost = async (req, res) => {
    
    await User.findOne({email : req.body.email}, (err, ressponse) => {
        if(err) res.status(404).json({message : err.message});
        ressponse.likes.push({blogpostId : req.params.blogpostId})
        ressponse.save();
    }).clone()

    
}

const getLikedPosts = async (req, res) => {
    console.log("getlikes called ");
    
    const likedPosts= await User.findOne({email : req.body.email}, (err, ressponse) => {
        if(err) res.status(404).json({message : err.message});
        
    }).clone()

    res.send(likedPosts.likes)
}

export  {likePost, getLikedPosts};