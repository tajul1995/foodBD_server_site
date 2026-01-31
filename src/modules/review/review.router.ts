import express from "express"
import auth, { UserRole } from "../../middleware/auth"
import { reviewController } from "./review.controller"

const router=express.Router()
router.post('/',reviewController.createReviews)
router.get('/',  reviewController.getAllReviews)
export const reviewRouter=router