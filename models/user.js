const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: [true, 'email is required'],
        trim: true,
        text: true
    },
    password: {
        type: String,
        text: true,
        trim: true
    },
    verified:{
        type:Boolean,
        default:false
    },
    vcode:{
        type:Number,
        
    },
    fullname:{
        type:String,
        text:true,
        trim:true
        
    }

});
module.exports = mongoose.model("User", userSchema);
