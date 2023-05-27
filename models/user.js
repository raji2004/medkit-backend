const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    email: {
        type: String,
        unique:false,
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
        
    },
    phonenumber:{
        type:String,
    },
    dob:{
        type:String,
    },
    username:{
        type:String
    }

});
module.exports = mongoose.model("User", userSchema);
