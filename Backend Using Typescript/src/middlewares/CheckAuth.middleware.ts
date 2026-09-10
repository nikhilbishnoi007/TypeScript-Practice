import {Request ,Response,NextFunction} from "express"
import  jwt ,{JwtPayload}  from "jsonwebtoken"
import config from "../config/config"

export const checkAuth=async (req:Request,res:Response,next:NextFunction)=>{
        const  refreshToken=req.cookies.refreshtoken
        if(! refreshToken){
            return res.status(400).json({
                message:"User not loggedin",
                success:false
            })
        }
        const decoded=jwt.verify( refreshToken,config.REFESH_TOKEN_SECRET)
        if(!decoded){
            return res.status(401).json({
                message:"Invalid token",
                success:false
            })
        }
        next()
}