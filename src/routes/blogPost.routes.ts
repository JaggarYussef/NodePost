import express from 'express';
import {createPost, getPost} from '../controllers/newPost.controller'
import verifyJWT from '../middelwares/tokenVerification';



const newPostRouter = express.Router();
newPostRouter.route('/')
                .get(verifyJWT , getPost)
                .post(verifyJWT, createPost)


export default newPostRouter;                