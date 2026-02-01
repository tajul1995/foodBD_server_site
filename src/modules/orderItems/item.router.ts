import express from "express"

import { itemController } from "./item.controller"
import auth, { UserRole } from "../../middleware/auth"
const router= express.Router()
router.post('/',auth(UserRole.CUSTOMER,UserRole.ADMIN,UserRole.PROVIDER), itemController.createOrderItem)
    
   
 export const itemRouter=router

