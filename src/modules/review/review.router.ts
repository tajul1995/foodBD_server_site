import express from "express"
import auth, { UserRole } from "../../middleware/auth"
import { reviewController } from "./review.controller"

const router=express.Router()
router.post('/',auth(UserRole.CUSTOMER,UserRole.ADMIN,UserRole.PROVIDER) , reviewController.createReviews)
router.get('/',auth(UserRole.CUSTOMER,UserRole.ADMIN,UserRole.PROVIDER), reviewController.getAllReviews)
router.delete('/:id' ,auth(UserRole.ADMIN), reviewController.deleteReviews)
export const reviewRouter=router