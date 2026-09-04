import  express, {Request,response,Response} from "express";
import CookieParser from "cookie-parser";
import cors from "cors"
import authRouter from "./routes/auth.routes";


const app=express()

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(CookieParser())

app.get("/",(req:Request,res:Response)=>{
    res.send("server is running")
})

app.use("/api",authRouter)


export {app}