import mongoose ,{Schema,Document} from "mongoose";

interface User extends Document{
    username:string,
    email:string,
    password:string,
    role:string
}

const userSchema=new Schema<User>({
    username:{
        type:String,
        required:true,
        toLowerCase:true
    },
    email:{
        type:String,
        required:true,

    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:"user"
    }
})

const userModel=mongoose.model<User>("user",userSchema)

export default userModel