import mongoose,{ Schema } from "mongoose"; 

const commentSchema = new Schema({ 
    content:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    video:{
        type: Schema.Types.ObjectId,
        ref: "Video"
    },
    owner:{
        type: Schema.Types.ObjectId,
        ref: "User"
    },
 },
 {
    timestamps: true //created at and updated at fields
 }
);

export const Comment = mongoose.model("Comment", commentSchema)