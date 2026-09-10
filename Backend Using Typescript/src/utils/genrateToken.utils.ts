import jwt from "jsonwebtoken"
import config from "../config/config"
import { Document } from "mongoose"


interface User extends Document{
    username:string,
    email:string,
    password:string,
    role:string,
    refreshToken:string,
}

export const genrateaccessToken=(user:User)=>{
     const accessToken=jwt.sign({id:user._id,email:user.email,username:user.username},config.ACCESS_TOKEN_SECRET,{expiresIn:"1h"})
     return accessToken
}
export const genraterefreshToken=(user:User)=>{
    const refreshToken=jwt.sign({id:user._id},config.REFESH_TOKEN_SECRET,{expiresIn:"7d"})
    return refreshToken
}