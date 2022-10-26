import express from 'express';
import {createPost, getPost, tester} from '../controllers/newPost.controller'
import verifyJWT from '../middelwares/tokenVerification';
import postComment from '../controllers/comment.controller';



const newPostRouter = express.Router();
newPostRouter.route('/')
                .get(verifyJWT , getPost)
                .post(verifyJWT, createPost)
                .get(tester)
newPostRouter.route('/:blogpostId')
                .post(verifyJWT, postComment)

export default newPostRouter;                