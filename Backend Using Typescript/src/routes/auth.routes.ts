import { Router } from "express";
import * as authControllers from "../controllers/auth.controller.ts"

const authRouter=Router()

authRouter.post("/register",authControllers.register)


export default authRouter