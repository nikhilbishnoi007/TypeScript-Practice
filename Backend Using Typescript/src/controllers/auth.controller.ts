import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import userModel from '../models/user.model'
import config from '../config/config'


interface ReqBody {
    name: string,
    email: string,
    password: string,
}
interface Res {
    message: string,
    success: boolean,
    data?: object
}
interface SearchBody{
    value:string
}

export const register=async (req: Request<{}, {}, ReqBody>, res: Response<Res>)=> {
    const { name, email, password } = req.body;
    let isAlreadyRegister = await userModel.findOne({
        $or: [
            { email },
            { name }
        ]
    })
    if (isAlreadyRegister) {
        return res.status(401).json({ message: "User or email already register", success: false })
    }
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)


    const newuser = await userModel.create({
        name,
        email,
        password: hash
    })
    const token = jwt.sign({ email: email, id: newuser._id }, config.JWT_SECRET, { expiresIn: "7d" })
    res.cookie("token", token, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        maxAge: 7 * 24 * 60 * 60 * 1000
    })
    res.status(201).json({
        message: "user created successfull",
        success: true,
        data: newuser,
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
   const token=jwt.sign({email:email,id:user._id},config.JWT_SECRET,{expiresIn:"7d"})
  res.cookie("token",token,{
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
    const token=req.cookies.token
    if(!token){
        return res.status(400).json({
            message:"User not loggedin",
            success:false
        })
    }
    const decoded=jwt.verify(token,config.JWT_SECRET)
    if(!decoded){
        res.status(401).json({
            message:"Invalid token",
            success:false
        })
    }
    res.clearCookie("token",{
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
                message:"Provide a validn name",
                success:false
            })
          }
          const user=await userModel.findOne({name:{$regex:value,$options:"i"}})
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