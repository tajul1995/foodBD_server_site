
import express from "express"
import { orderController } from "./order.controller"
import auth, { UserRole } from "../../middleware/auth"


const router= express.Router()
router.get('/'  ,auth(UserRole.ADMIN,UserRole.PROVIDER), orderController.getAllOrders)
router.get('/:id' ,auth(UserRole.ADMIN,UserRole.CUSTOMER,UserRole.PROVIDER), orderController.getOrdersByid)
router.post('/' ,auth(UserRole.ADMIN,UserRole.CUSTOMER,UserRole.PROVIDER), orderController.createOrder)
router.patch('/:id' ,auth(UserRole.ADMIN,UserRole.CUSTOMER,UserRole.PROVIDER), orderController.updateOrderStatus)
export const orderRouter= router
