import express from "express";
import { orderController } from "./order.controller";
import auth, { UserRole } from "../../middleware/auth";
const router = express.Router();
router.get('/', orderController.getAllOrders);
router.get('/:id', orderController.getOrdersByid);
router.post('/', auth(UserRole.ADMIN, UserRole.CUSTOMER, UserRole.PROVIDER), orderController.createOrder);
router.patch('/:id', orderController.updateOrderStatus);
export const orderRouter = router;
