
import express from "express"
import verifyJWT from "../middelwares/tokenVerification";
import { getAllUsers, getUserById, getBlogPostById, getCommentById } from "../controllers/search.controllers";


const searchRouter = express.Router();
searchRouter.route('/getAllUsers').get(verifyJWT, getAllUsers);
searchRouter.route('/:userId').get(verifyJWT, getUserById)
searchRouter.route('/:userId/postsByUser').get(verifyJWT, getBlogPostById)
searchRouter.route('/:userId/commentsByUser').get(verifyJWT , getCommentById)



export default searchRouter;