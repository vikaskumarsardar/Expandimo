const mongoose = require('mongoose')
const {v1: uuidv1} = require('uuid')
const crypto = require('crypto')
const schema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    encrypted_pass:{
        type:String,
        required:true,
        unique:true
    },
    salt:String,
    email:{
        type:String,
        required:true,
        unique:true
    }
},{
    timestamps:true
})

schema.virtual('password').set(function(password){
    this.salt = uuidv1()
    this.encrypted_pass = this.securePassword(password)
})

schema.methods = {
    validatePassword : function(plainPassword){
        return this.securePassword(plainPassword) === this.encrypted_pass
    },
    securePassword:function(plainPassword){
        if(plainPassword === '') return 
        return crypto.createHmac('sha256',this.salt).update(plainPassword).digest('hex')
    }
}

const Users = mongoose.model('Users',schema)
module.exports = Users