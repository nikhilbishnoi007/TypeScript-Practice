import dotenv from "dotenv"
dotenv.config()

if(!process.env.MONGO_DB_URI){
    throw new Error("connectin string is not given")
}
if(!process.env.PORT){
    throw new Error ("port doesn't provided")
}
const config={
 PORT:process.env.PORT,
 MONGO_DB:process.env.MONGO_DB_URI,
}

export default config