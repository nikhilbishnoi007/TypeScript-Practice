import dotenv from "dotenv"
dotenv.config()

if(!process.env.MONGO_DB_URI){
    throw new Error("connectin string is not given")
}
if(!process.env.PORT){
    throw new Error ("port doesn't provided")
}
if(!process.env.ACCESS_TOKEN_SECRET){
    throw new Error("access token secret not provided")
}
if(!process.env.REFRESH_TOKEN_SECRET){
    throw new Error("refresh token secret not provided")
}
const config={
 PORT:process.env.PORT,
 MONGO_DB:process.env.MONGO_DB_URI,
 ACCESS_TOKEN_SECRET:process.env.ACCESS_TOKEN_SECRET,
 REFESH_TOKEN_SECRET:process.env.REFRESH_TOKEN_SECRET
}

export default config