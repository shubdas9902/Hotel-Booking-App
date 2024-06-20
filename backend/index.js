import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectToMongo from "./db/connectToMongoDB.js"

const app= express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

dotenv.config()
const PORT= process.env.PORT

app.listen(PORT,()=>{
    connectToMongo()
    console.log(`Listening to ${PORT}`)
})