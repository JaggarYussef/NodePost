
import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express'


interface IAuthRequest extends Request {headers: {Authorization : string}}

const verifyJWT = (req : IAuthRequest, res: Response, next : NextFunction ) => {
    const authHeader  =   req.headers["x-access-token"]

   

     // check header or url parameters or post parameters for token
    var token = req.headers['x-access-token'];
    if (!token) 
    return res.status(403).send({ auth: false, message: 'No token provided.' });


    
   // console.log('this is token : ' + token);

    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if (err) return res.status(403).json({ message: 'Forbidden' })
            console.log("verifyJWTS: decoded email= " + decoded[1]);
            req.body.email = decoded.email
            next()
        }
    )

}

export default verifyJWT;