import express from "express"
import {User, validate} from "../model/user.model";
import bycrpt from "bcrypt";
import axios from "axios";

const app = express();
const router= express.Route();