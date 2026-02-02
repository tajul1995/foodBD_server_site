import express from 'express'
import auth, { UserRole } from '../../middleware/auth'
import { mealsController } from './meal.controller'
const router=express.Router()
router.get('/',mealsController.getAllMeals)
router.get('/:id' , mealsController.getMealById)
router.post('/',auth(UserRole.PROVIDER),mealsController.createMeals)
export const mealRouter=router