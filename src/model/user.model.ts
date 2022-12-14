import mongoose from 'mongoose';
import { Schema } from 'mongoose';
import jwt from 'jsonwebtoken';
import joi from 'joi';
import passwordComplex from 'joi-password-complexity';


const userSchema = new mongoose.Schema ({
    userName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    likes : [{blogpostId : String}]
})


userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ id: this._id }, process.env.JWT_PRIVATE_KEY, {
		expiresIn: "7d",
	});
	return token;
}; 


const User = mongoose.model("user", userSchema)

const validate = (data) => {
    const schema = joi.object({
        email:     joi.string().email().required().label("Email"),
        password:  passwordComplex().required().label("Password"),
        userName:  joi.string().required().label("Username"),

    })
   
    return  schema.validate(data)
}


export {User, validate};
