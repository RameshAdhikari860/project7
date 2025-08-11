import mongoose  from "mongoose";

const userSchema = new mongoose.Schema({

    fullName : {
        type : String,
        required : true
    },
    email : {
        type : String,  
        unique : true
    },
    phone : {
        type : Number,
        unique : true
    },
    password : {
        type : Number,
        required : true
    },
    address : {
        type : String
    },
    role : {
        type : String,
        enum : ['admin','user'],
        default : 'user'
    },
    imagePath: {
        type : String,
    }
})


const User =  mongoose.model('User',userSchema)

export default User;