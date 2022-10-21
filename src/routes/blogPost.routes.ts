import express from 'express';
import {createPost, getPost} from '../controllers/newPost.controller'



const newPostRouter = express.Router();
newPostRouter.route('/')
                .get(getPost)
                .post(createPost)


export default newPostRouter;                