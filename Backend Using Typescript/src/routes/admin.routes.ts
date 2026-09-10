import { Router } from "express";
import * as adminController from "../controllers/admin.controller"
import { isAdmin } from "../middlewares/UserTypes.middleware";

const adminRouter=Router()

adminRouter.get("/getusers",isAdmin,adminController.getusers)

export default adminRouter