import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"

import authRoutes from "./routes/auth.route.js"
import connecttomongodb from "./db/connecttomongodb.js"
import messageRoutes from  "./routes/message.route.js"
import userRoutes from "./routes/user.route.js"

import { app,server } from "./socket/socket.js"
//const app= express()


const PORT= process.env.PORT || 5000

dotenv.config()

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)

server.listen(PORT,()=>{
    connecttomongodb(); 
    console.log(`server running ${PORT}`)
    
})