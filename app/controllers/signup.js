const {parse} = require('querystring')
const Users = require('../modals/users')
const json = (data)=>{
    return JSON.stringify(data)
}

const SignUp = async (req,res) =>{
     
        try{
            const {email} = req.body
            const result = await Users.findOne({email:email})
            if(result) {
                res.writeHead(400,"Bad Request",{
                    "Content-Type":"application/json"
                })
                return res.end(json({message:'User Already Exists'}))
            }

            const newUser = new Users(req.body)
            const saved = await newUser.save()
            res.writeHead(201,"created",{
                    "Content-Type":"application/json"
                })
            res.end(json({message:"successfully Saved",data:saved}))
        }catch(err){
            res.writeHead(500,"Internal Server Error",{
                'Content-Type':'application/json'
            })
            res.end(json({error:err}))
        }
}

const LoginPost = async(req,res) =>{
        try{
            const {email,password} = req.body
            const response = await Users.findOne({email})
            if(!response) {
                res.writeHead(400,"bad Request",{
                    'Content-Type':'application/json'
                })
                return res.end(json({message:"You are not Registered"}))
            }
            if(!response.validatePassword(password)){
                res.writeHead(400,"bad Request",{
                    'Content-Type':'application/json'
                })
                return res.end(json({message:"either userName or password is incorrect"}))
            }
                
            res.writeHead(200,"OK",{
                'Content-Type':'application/json'
            })
            res.end(json(response))
        }catch(err){
            res.writeHead(500,"Internal Server Error",{
                'Content-type':"application/json",
            })
            res.end(json({error:err}))
        }
}

module.exports = {SignUp,LoginPost}