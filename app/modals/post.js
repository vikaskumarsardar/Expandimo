const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        minlength:10
    },
    description:{
        type:String,
        minlength:15,
        required:true
    },
},{
    timestamps:true
})