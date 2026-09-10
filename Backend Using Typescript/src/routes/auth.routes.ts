import { Router } from "express";
import * as authControllers from "../controllers/auth.controller"
import { checkAuth } from "../middlewares/CheckAuth.middleware";

const authRouter=Router()

authRouter.post("/register",authControllers.register)
authRouter.post("/login",authControllers.login)
authRouter.get("/logout",checkAuth,authControllers.logout)
authRouter.post("/search",authControllers.search)


export default authRouter