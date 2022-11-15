import express from 'express';
import {createPost} from '../controllers/newPost.controller'
import verifyJWT from '../middelwares/tokenVerification';
import {postComment, getComments} from '../controllers/comment.controller';
import {likePost, getLikedPosts} from '../controllers/likePost.controller';


const newPostRouter = express.Router();
newPostRouter.route('/')
                .post(verifyJWT, createPost)
                
newPostRouter.route('/:blogpostId/comment')
                .post(verifyJWT, postComment)
                .get(verifyJWT, getComments)
newPostRouter.route('/:blogpostId/like')
                .post(verifyJWT, likePost)
                .get(verifyJWT, getLikedPosts)
export default newPostRouter;                