const express=require('express')
const app=express()
const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config()
const connectDB=require('./config/db')
app.use(express.json())

connectDB()
app.use('/api/auth',require("./routes/authRoutes"))
app.get('/api',(req,res)=>{
    res.send('Hello from Express framework')
})

app.listen(5000,()=>{
    console.log('Server running on 5000')
})