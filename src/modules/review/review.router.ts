import express from "express"
import auth, { UserRole } from "../../middleware/auth"
import { reviewController } from "./review.controller"

const router=express.Router()
router.post('/',auth(UserRole.CUSTOMER,UserRole.PROVIDER,UserRole.ADMIN),reviewController.createReviews)
export const reviewRouter=router