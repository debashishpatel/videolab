import mongoose,{ Schema } from "mongoose";

const playlistSchema = new Schema({

    name:{
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
    videos:{
        type: Schema.Types.ObjectId,
        ref: "Video"
    },
    owner:{ 
        type: Schema.Types.ObjectId,
        ref: "User"
    }

},
{
    timestamps: true //created at and updated at fields
})

export const Playlist = mongoose.model("Playlist", playlistSchema)