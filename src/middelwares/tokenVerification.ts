
import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express'


interface IAuthRequest extends Request {headers: {Authorization : string}}

const verifyJWT = (req : IAuthRequest, res: Response, next : NextFunction ) => {
    const authHeader  =   req.headers.Authorization

    console.log("this is auth header  : " + req.headers.Authorization)

    if (!authHeader?.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized' })
    }

    const token : any= authHeader.split(' ')[1]
   // console.log('this is token : ' + token);

    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if (err) return res.status(403).json({ message: 'Forbidden' })
            console.log("verifyJWTS: decoded email= " + decoded.email);
            req.body.email = decoded.email
           // next()
        }
    )

}

export default verifyJWT;