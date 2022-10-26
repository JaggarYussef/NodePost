import express from 'express';
import {handleNewUser, test} from '../controllers/userRegisteration.controller'

const registerationRouter = express.Router();
registerationRouter.route("/")
                    .get (test)
                    .post(handleNewUser)


export default registerationRouter;