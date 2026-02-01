import express from "express";
import { reviewController } from "./review.controller";
import { UserRole } from "../../middleware/auth";
const router = express.Router();
router.post('/', reviewController.createReviews);
router.get('/', reviewController.getAllReviews);
router.delete('/:id', reviewController.deleteReviews);
export const reviewRouter = router;
