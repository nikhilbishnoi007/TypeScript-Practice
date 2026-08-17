import  express, {Request,response,Response} from "express";
import CookieParser from "cookie-parser";
import cors from "cors"


const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(CookieParser())

app.get("/",(req:Request,res:Response)=>{
    res.send("server is running")
})

export {app}