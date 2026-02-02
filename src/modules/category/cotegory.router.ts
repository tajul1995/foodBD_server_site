import express from 'express'
import { categoryController } from './catrgory.controller'
import auth, { UserRole } from '../../middleware/auth'
const router=express.Router()
router.get('/'  ,categoryController.getAllCategory)
router.get('/:name',categoryController.findCategoryByName)
router.post('/',auth(UserRole.ADMIN,UserRole.CUSTOMER,UserRole.PROVIDER),categoryController.createCategory)


export const categoryRouter=router