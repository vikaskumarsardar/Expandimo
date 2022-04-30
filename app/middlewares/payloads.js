// const { parse } = require("querystring")

const payloads = (req,func) =>{
    let str = ''
    req.on('data',(data)=>{
        str += data
    })   
    req.on('end',()=>{
        req.body = JSON.parse(str)
        func()
    })
}

module.exports = payloads