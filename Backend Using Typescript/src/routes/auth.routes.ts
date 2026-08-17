import { Router } from "express";
import * as authControllers from "../controllers/auth.controller"

const authRouter=Router()

authRouter.post("/register",authControllers.register)
authRouter.post("/login",authControllers.login)
authRouter.get("/logout",authControllers.logout)


export default authRouter