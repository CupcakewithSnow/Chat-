require('dotenv').config()
const express = require('express')
const app = express()
PORT = process.env.PORT || 5000
const start = ()=>{
    try{
        app.listen(PORT,()=>console.log(`server run on ${PORT} port`))
    }catch(e){
        console.log(e)
    }
}
start()