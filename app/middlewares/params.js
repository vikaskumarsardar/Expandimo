const params = (req,query,callback) =>{
    let params = req.url.toString().split(`${query}`)
    

    // params = params[params.length - 1 ].replace('/','')
    params = params[1].replace('/','')
    console.log(params);
    req.params = params
    callback()
}

module.exports = params