import express from "express"
import { orderController } from "./order.controller"
import auth, { UserRole } from "../../middleware/auth"

const router= express.Router()
router.post('/',auth(UserRole.PROVIDER,UserRole.CUSTOMER) , orderController.createOrder)
export const orderRouter= router
