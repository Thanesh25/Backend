import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import ConnectDB from "./Database/DBconnfig.js"
import userRoutes from "./Routers/RegisterRoutes.js"
dotenv.config()

const app = express()


app.use(express.json())
app.use(cors({
  origin: "*",
  credentials: true,
  
}))


ConnectDB()

app.get('/',(req,res)=> {
    res.status(200).send('App is working  fine')
})


app.use("/api/user",userRoutes)


app.listen(process.env.PORT, () => {
    console.log(`APP is listening in ${process.env.PORT}`)
})
