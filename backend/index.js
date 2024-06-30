import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectToMongo from "./db/connectToMongoDB.js"
import authRoutes from "./routes/auth.js"

const app= express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


dotenv.config()
const PORT= process.env.PORT

app.use("/api/auth",authRoutes)

app.listen(PORT,()=>{
    connectToMongo()
    console.log(`Listening to ${PORT}`)
})