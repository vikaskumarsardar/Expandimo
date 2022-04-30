const Home = require('../views/home')
const login = require('../views/login')
const signup = require('../views/signup')
const {SignUp,LoginPost} = require('../controllers/signup')
const payloads = require('../middlewares/payloads')
const params = require('../middlewares/params')


const routes = (req,res) =>{
    // Views are Routed Here
    if(req.method == "GET"){
        if(req.url == '/'){
            res.end(Home)
        }
        if(req.url == '/signup'){
            res.end(signup)
        }
        if(req.url == '/login'){
            res.end(login)
        }
    }
    
    //  POST Routes 
    
    if(req.method == "POST"){
        payloads(req,()=>{
            if(req.url == '/signup'){
                SignUp(req,res)
            }
            if(req.url == '/login'){
                LoginPost(req,res)            
            }
        })
    }

    // PATCH Routes

    if(req.method == "PATCH"){
        payloads(req,()=>{

                if(req.url.toString().match(/deleteone/)){
                    params(req,'/deleteone',()=>{
                        
                        res.writeHead(200,"OK",{
                            'Content-Type':'plain/text'
                        })
                        res.end(`delteOne params : ${req.params} \n data : ${JSON.stringify(req.body)}`)
                    })
                }
                if(req.url.toString().match(/updateone/)){
                    params(req,'/updateone',()=>{
                        
                        res.writeHead(200,"OK",{
                            'Content-Type':'plain/text'
                        })
                        res.end(`updateone params : ${req.params} \n usersData ${JSON.stringify(req.body)}`)
                    })
                }
            
            if(req.url.toString().match(/findone/)){
                params(req,'/findone',()=>{
                    res.writeHead(200,"OK",{
                        'Content-Type':'plain/text'
                    })
                    res.end(`findone params : ${req.params} \n data : ${JSON.stringify(req.body)}`)
                })
            }
    })
    }
}

module.exports = routes