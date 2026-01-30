import express from "express"
// import auth, { UserRole } from "../../middleware/auth"
import { userController } from "./user.controller"
const router=express.Router()


router.get('/'  ,userController.getAllUser)
router.patch('/:id'  ,userController.updateUser)
export const userRouter=router