import mongoose ,{Schema,Document} from "mongoose";

interface User{
    name:string,
    email:string,
    password:string
}

const userSchema=new Schema<User>({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const userModel=mongoose.model<User>("user",userSchema)

export default userModel