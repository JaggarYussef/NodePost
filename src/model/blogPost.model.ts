import mongoose, { Schema } from 'mongoose';



const postSchema  = new mongoose.Schema({
    user:     {type : Schema.Types.ObjectId, required : true, ref : "users" },
    title:    {type: String,  required: true},
    content:  {type: String, required: true},
    date:     {type : Date, required : true}
})

const blogPost = mongoose.model('blogPost', postSchema)

export default blogPost;