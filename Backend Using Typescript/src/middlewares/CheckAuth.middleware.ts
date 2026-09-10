import {Request ,Response,NextFunction} from "express"
import  jwt ,{JwtPayload}  from "jsonwebtoken"
import config from "../config/config"

export const checkAuth=async (req:Request,res:Response,next:NextFunction)=>{
        const token=req.cookies.token
        if(!token){
            return res.status(400).json({
                message:"User not loggedin",
                success:false
            })
        }
        const decoded=jwt.verify(token,config.JWT_SECRET)
        if(!decoded){
            return res.status(401).json({
                message:"Invalid token",
                success:false
            })
        }
        next()
}