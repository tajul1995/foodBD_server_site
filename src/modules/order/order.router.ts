import express from "express"
import { orderController } from "./order.controller"
import auth, { UserRole } from "../../middleware/auth"

const router= express.Router()
router.get('/',orderController.getAllOrders)
router.post('/' ,auth(UserRole.CUSTOMER,UserRole.PROVIDER,UserRole.ADMIN), orderController.createOrder)
export const orderRouter= router
