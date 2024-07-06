import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectToMongo from "./db/connectToMongoDB.js"
import authRoutes from "./routes/auth.js"
import cookieParser from "cookie-parser"

const app= express()

app.use(cors({
    origin: 'http://localhost:5173', // Replace with your frontend URL
    credentials: true // Enable credentials if you need cookies
  }));
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())


dotenv.config()
const PORT= process.env.PORT

app.use("/api/auth",authRoutes)

app.listen(PORT,()=>{
    connectToMongo()
    console.log(`Listening to ${PORT}`)
})