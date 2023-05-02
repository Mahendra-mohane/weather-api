const express=require('express')
require('dotenv').config()
const connection=require('./connection/db')
const userrouter = require('./routes/user.router')
const cityrouter = require('./routes/city.router')
const auth = require('./middleware/auth')
const limiter = require('./middleware/ratelimit')
const app=express()
app.use(express.json())

app.use("/user",userrouter)
app.use(limiter)

app.use("/city",cityrouter)

app.listen(process.env.port,async ()=>{
    await connection
    console.log("connected")
})