import express from 'express';
import {handleNewUser} from '../controllers/userRegisteration.controller'

const registerationRouter = express.Router();
registerationRouter.route("/")
                    .post(handleNewUser)


export default registerationRouter;