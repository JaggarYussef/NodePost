import express from "express";
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

const postComment = async (req, res) => {
    const userobjID : any = await User.findOne({email: req.body.email}, {password : 0}, (err,response) => {
        if (err) return res.status(404).json({ message: 'No user found' });
        
    }).clone()

    const now = new Date();
    const formatedDate = date.format(now, 'YYYY/MM/DD HH:mm:ss')

    const newComment  = await new comment({
        userId: userobjID._id,
        blogPostId: req.params.blogpostId,
        content: req.body.commentContent,
        date: formatedDate
    }).save();

 
  

    await blogPost.findOne({_id: req.params.blogpostId}, (err, response) => {
        if(err) res.status(404).json({message : err.message})
     
       console.log('comment id :' + newComment._id);
       response.comments.push({commentId: newComment._id})
       response.save();
    }).clone()

    res.status(200).send('commented posted')
    
}


const getComments = async (req, res) => {
    console.log("getlikes comments ");
    const commentsArray= await blogPost.find({_id: req.params.blogpostId}, (err, response) => {
        if(err) res.status(404).json({message : err.message})
    }).clone()

    // res.send("commentsArray.comments")
    res.send(commentsArray)
}

export {getComments, postComment};