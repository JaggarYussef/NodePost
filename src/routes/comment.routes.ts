import express from "express";
import verifyJWT from "../middelwares/tokenVerification";
import {postComment} from "../controllers/comment.controller";


const  commentRouter= express.Router();

commentRouter.route('/')
                .post(verifyJWT, postComment)


export default commentRouter;                