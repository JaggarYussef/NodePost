import express from 'express';
import {createPost, getPost, tester} from '../controllers/newPost.controller'
import verifyJWT from '../middelwares/tokenVerification';



const newPostRouter = express.Router();
newPostRouter.route('/')
                .get(verifyJWT , getPost)
                .post(verifyJWT, createPost)
                .get(tester)


export default newPostRouter;                