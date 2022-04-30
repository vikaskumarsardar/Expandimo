const mongoose = require('mongoose')
const config = require('./config/config')

mongoose.connect(config).then(res=>{
    console.log('connected successfully');
}).catch(err=>{
    console.log(err);
})