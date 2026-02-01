import express from "express"
 import auth, { UserRole } from "../../middleware/auth"
import { userController } from "./user.controller"
const router=express.Router()


router.get('/',auth(UserRole.ADMIN), userController.getAllUser)
router.patch('/:id',auth(UserRole.ADMIN)  ,userController.updateUser)
export const userRouter=router