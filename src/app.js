import express from 'express'
import { connectDb } from './config/database.js'
import articleRoutes from './routes/articleRoutes.js'
import authRoutes from './routes/authRoute.js'
import { configDotenv } from 'dotenv'
import cookieParser from 'cookie-parser'



const app = express()

configDotenv()

app.use(express.json())

app.use(cookieParser())

connectDb()

// localhost:3500/article/create

//test create article
app.use('/article',articleRoutes)

app.use('/auth',authRoutes)









const port = 3500
app.listen(port,()=>{
    console.log("server started at port ",port)
})
