import express from 'express'
import { connectDb } from './config/database.js'
import articleRoutes from './routes/articleRoutes.js'


const app = express()



app.use(express.json())

connectDb()

// localhost:3500/article/create

//test create article
app.use('/article',articleRoutes)




const port = 3500
app.listen(port,()=>{
    console.log("server started at port ",port)
})
