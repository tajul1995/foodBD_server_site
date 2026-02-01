import express from 'express'
import auth, { UserRole } from '../../middleware/auth'
import { mealsController } from './meal.controller'
const router=express.Router()
router.get('/',auth(UserRole.PROVIDER,UserRole.ADMIN,),mealsController.getAllMeals)
router.get('/:id',auth(UserRole.PROVIDER,UserRole.ADMIN,UserRole.CUSTOMER) , mealsController.getMealById)
router.post('/',auth(UserRole.PROVIDER),mealsController.createMeals)
export const mealRouter=router