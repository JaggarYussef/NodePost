import mongoose, { Mongoose, Schema } from "mongoose";


const commentSchema = new mongoose.Schema({
    userId : {type: Schema.Types.ObjectId, required: true, ref: 'users'},
    blogPostId : {type: Schema.Types.ObjectId, required: true, ref: 'blogPost'},
    content: { type : String},
    date: {type: String, require : true}
})


export default mongoose.model('comments', commentSchema);