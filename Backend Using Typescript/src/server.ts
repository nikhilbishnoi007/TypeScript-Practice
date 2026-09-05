import { app } from "./app";
import connectDb from "./config/db";
import config from "./config/config";

const port=config.PORT

connectDb().then(()=>{
 app.listen(port,()=>{
    console.log(`server is listening at port:${port}`)
})
})
.catch((error)=>{
    console.log(error.message)
})

