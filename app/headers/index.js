const writeHead = (res,status_code,desc,body) =>{
    return res.writeHead(status_code,desc,body)
}

module.exports = writeHead