import mongoose from "mongoose";
import config from "./config";
export default async function  connectDb():Promise<void> {
    try{
   await mongoose.connect(config.MONGO_DB)
    console.log("db connect succesffuly")
     }catch(error){
     console.log(error)
    }
  
}