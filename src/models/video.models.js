import mongoose,{ Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videosSchema = new Schema({
    videoFile:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    thumbnail:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    owner:{
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    title:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    description:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    duration:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    views:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    ispublished:{
        type: Boolean,
        required: true,
        trim: true,
        unique: true
    }

},
{
    timestamps: true //created at and updated at fields
})

videosSchema.plugin(mongooseAggregatePaginate)
export const Video = mongoose.model("Video", videosSchema)