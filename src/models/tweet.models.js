import mongoose,{ Schema } from "mongoose";

const tweetSchema = new Schema({
    owner:{
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    content:{
        type: String,
        required: true,
        trim: true,
        unique: true
    }

},
{
    timestamps: true //created at and updated at fields
})

export const Tweet = mongoose.model("Tweet", tweetSchema)