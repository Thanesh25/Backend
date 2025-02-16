import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import ConnectDB from "./Database/DBconnfig.js"
import userRoutes from "./Routers/RegisterRoutes.js"
dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(cors({
  origin: "https://movie-app-p.netlify.app",
  credentials: true,
  
}))
app.options("*", cors());

app.get('/',(req,res)=> {
    res.status(200).send('App is working  fine')
})
app.get("/solo", (req,res) => {
    res.status(200).send("it working were well")
})

app.use("/api/user",userRoutes)

ConnectDB()

app.listen(process.env.PORT, () => {
    console.log(`APP is listening in ${process.env.PORT}`)
})
