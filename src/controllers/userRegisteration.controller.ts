import express from "express"
import {User, validate} from "../model/user.model";
import bcrypt from "bcrypt";



const app = express();
const router= express.Router();




//Here we are configuring express to use body-parser as middle-ware.
app.use(express.urlencoded({extended: true}));

// To parse the incoming requests with JSON payloads
app.use(express.json());
//app.use(cors());



const test = async (req, res ) => {


	res.json({user: 'made'})

}


const handleNewUser = async ( req, res) => {

    //console.log(req.body);
	console.log("UserName: " + req.body.userName);
	console.log("email: " + req.body.email);
	console.log("password: " + req.body.password);
	console.log('post/ ' + req.body.customKey);
	try {
		
		
		const error : any = validate(req.body);
		
		console.log('called');
		
		if (error)
			
			return res.status(400).send({ message: error.details[0].message });
			
		const user = await User.findOne({ email: req.body.email });
		console.log('called 3');
		if (user)
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" });

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		console.log("this salt: " + salt);
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		await new User({ ...req.body, password: hashPassword }).save();
		res.status(201).send({ message: "User created successfully" });
	} catch (error) {
		res.send({ message: error.message  });
	}
} 



export {handleNewUser, test};