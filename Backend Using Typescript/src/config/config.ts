import dotenv from "dotenv"
dotenv.config()

if(!process.env.MONGO_DB_URI){
    throw new Error("connectin string is not given")
}
if(!process.env.PORT){
    throw new Error ("port doesn't provided")
}
if(!process.env.JWT_SECERET){
    throw new Error("jwt secret not provided")
}
const config={
 PORT:process.env.PORT,
 MONGO_DB:process.env.MONGO_DB_URI,
 JWT_SECRET:process.env.JWT_SECERET
}

export default config