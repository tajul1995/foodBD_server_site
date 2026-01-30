import express from "express"
// import auth, { UserRole } from "../../middleware/auth"
import { userController } from "./user.controller"
const router=express.Router()


router.get('/'  ,userController.getAllUser)
export const userRouter=router