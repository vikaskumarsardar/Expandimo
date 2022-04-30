const http = require('http')
require('dotenv').config()
const routes = require('./app/routes/routes')
const handleServer = (req,res) =>{
    routes(req,res)    
}
const port = process.env.PORT || 8000
const server = http.createServer(handleServer)
require('./database/index')

server.listen(port,()=>{
    console.log(`listening on port ${port}`);
})

