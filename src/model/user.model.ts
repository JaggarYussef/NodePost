import mongoose from 'mongoose';
//import { Schema, model, connect } from 'mongoose';
import jwt from 'jsonwebtoken';
import joi from 'joi';
import passwordComplex from 'joi-password-complexity';


const userSchema = new mongoose.Schema ({
    userName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true} 
})


userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		expiresIn: "7d",
	});
	return token;
}; 

userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		expiresIn: "7d",
	});
	return token;
}; 

const User = mongoose.model("user", userSchema)

const validate = async (data) => {
    console.log('this is data efore joi ' + data.email +  " " + data.password);
    const schema = joi.object({
        userName:     joi.string().email().required().label("Username"),
        email:     joi.string().email().required().label("Email"),
        password:  passwordComplex().required().label("Password")
    })
    console.log("this is schema: " + await schema.validate(data) );
    return await schema.validate(data)
}


export {User, validate};
