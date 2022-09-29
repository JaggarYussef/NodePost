require('dotenv').config();
import mongoose from 'mongoose';



exports = () : void => {


    try {
        mongoose.connect(process.env.DB, () => {
            console.log('connected to database successfuly');
            
        });

    } catch (error) {
        console.log("Couldn't connect to Database");
        console.error(error.message);
    }
}