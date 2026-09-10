import userModel from "../models/user.model";
import { Request,Response } from "express";

interface Res{
    message:string,
    success:boolean,
    data?:object
}

export const getusers=async(req:Request,res:Response<Res>)=>{
    const allusers=await userModel.find()
    if(allusers.length===0){
        return res.status(404).json({
            message:"no user exist",
            success:false
        })
    }
    res.status(200).json({
        message:"user find",
        success:true,
        data:allusers
    })

}