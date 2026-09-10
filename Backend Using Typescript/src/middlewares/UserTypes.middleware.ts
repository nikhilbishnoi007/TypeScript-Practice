import { Request,Response,NextFunction } from "express";
import userModel from "../models/user.model";
import config from "../config/config";
import jwt, { JwtPayload } from "jsonwebtoken"

interface Res{
    message:string,
    success:boolean,
    data?:object
}

export const isAdmin=async(req:Request,res:Response<Res>,next:NextFunction)=>{
  const token=req.cookies.token;
  if(!token){
    return res.status(402).json({
        message:"User not loggedin",
        success:false
    })
}
const decoded=jwt.verify(token,config.ACCESS_TOKEN_SECRET) as JwtPayload
const user=await userModel.findById(decoded.id as string)
if(!user){
    return res.status(404).json({
        message:"user not found",
        success:false
    })
}
if(user.role!=="admin"){
    return res.status(403).json({
        message:"User is not authorize to perform this task",
        success:false
    })
}
next()
}