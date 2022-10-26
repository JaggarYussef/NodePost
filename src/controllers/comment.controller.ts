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

    console.log('blogpost id = ' + req.params.blogpostId);
    
    const user : any = await User.findOne({email: req.body.email}, {password : 0}, (err,response) => {
        if (err) return res.status(404).json({ message: 'No user found' });
    }).clone()

   // const postId : any  = await blogPost.findOne({_id : req.body.blogPostId}).clone()

    const now = new Date();
    const formatedDate = date.format(now, 'YYYY/MM/DD HH:mm:ss')
    new comment({
        userId: user._id,
        blogPostId: req.params.blogpostId,
        content: req.body.commentContent,
        date: formatedDate
    }).save();
    
}

export default postComment;