import mongoose from "mongoose";

const BookUser = mongoose.Schema({
    UserName:{
        type: String,
        required: true
    },
    BookName:{
        type: String,
        required: true
    },
    Activity:{
        type: String,
        required: true
    },
    Date:{
        type: String,
        required: true
    }
});

export default mongoose.model('BookUser', BookUser);