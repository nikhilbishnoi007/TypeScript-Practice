import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import userModel from '../models/user.model'
import config from '../config/config'
import { genrateaccessToken,genraterefreshToken } from '../utils/genrateToken.utils'


interface ReqBody {
    username: string,
    email: string,
    password: string,
}
interface Res {
    message: string,
    success: boolean,
    data?: object;
    accessToken?:string
}
interface SearchBody{
    value:string
}

export const register=async (req: Request<{}, {}, ReqBody>, res: Response<Res>)=> {
    const { username, email, password } = req.body;
    let isAlreadyRegister = await userModel.findOne({
        $or: [
            { email },
            { username }
        ]
    })
    if (isAlreadyRegister) {
        return res.status(401).json({ message: "User or email already register", success: false })
    }
    
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
        const newuser = await userModel.create({
        username,
        email,
        password: hash,
        role:"admin"
    })
    const refreshToken = genraterefreshToken(newuser)
    const accessToken=genrateaccessToken(newuser)
    newuser.refreshToken=refreshToken
    await newuser.save()
    res.cookie("refreshtoken", refreshToken, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        maxAge: 7 * 24 * 60 * 60 * 1000
    })
    res.status(201).json({
        message: "user registred successfully",
        success: true,
        data: newuser,
        accessToken
    })
   
}

export const login=async(req: Request<{}, {}, ReqBody>, res: Response<Res>)=> {
    const { email, password } = req.body
    const user=await userModel.findOne({email:email})
    if(!user){
        return res.status(401).json({
            message:"email or password wrong",
            success:false,
        })
    }
   const result =bcrypt.compare(password,user.password)
   if(!result){
    res.status(401).json({
        message:"email or passsword is wrong",
        success:false
    })
   }
   const  refreshToken=genraterefreshToken(user)
  res.cookie("refreshtoken", refreshToken,{
    httpOnly:true,
    secure:false,
    sameSite:"lax",
    maxAge:7*24*60*60*1000
})
res.status(200).json({
    message:"Login Suceesffully",
    success:true,
    data:user
})

}

export const logout=async(req:Request<{},{},ReqBody>,res:Response<Res>)=>{

    res.clearCookie("refreshtoken",{
        httpOnly:true,
        secure:false,
        sameSite:"lax"
    })
    res.status(200).json({
        message:"logout successfully",
        success:true
    })
}

export const search=async(req:Request<{},{},SearchBody>,res:Response<Res>)=>{
          const {value}=req.body;
          if(value==""){
            return res.status(404).json({
                message:"Provide a valid  name",
                success:false
            })
          }
          const user=await userModel.findOne({username:{$regex:value,$options:"i"}},"-password -_id")
          if(!user){
            return res.status(404).json({
                message:"user not found",
                success:false
            })
          }
          res.status(200).json({
            message:"user found",
            success:true,
            data:user
          })
}