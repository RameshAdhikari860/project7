import express from 'express'
import { connectDb } from './config/database.js'
import articleRoutes from './routes/articleRoutes.js'
import authRoutes from './routes/authRoute.js'


const app = express()



app.use(express.json())

connectDb()

// localhost:3500/article/create

//test create article
app.use('/article',articleRoutes)

app.use('/auth',authRoutes)







const port = 3500
app.listen(port,()=>{
    console.log("server started at port ",port)
})
