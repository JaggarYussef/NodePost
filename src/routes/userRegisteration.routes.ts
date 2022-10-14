import express from 'express';
import {handleNewUser} from '../controllers/userRegisteration.controller'

const registerationRouter = express.Router();
registerationRouter.post("./", handleNewUser)


export default registerationRouter;