import express from "express";
import { itemController } from "./item.controller";
const router = express.Router();
router.post('/', itemController.createOrderItem);
export const itemRouter = router;
