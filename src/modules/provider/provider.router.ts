import express from 'express'

import { providerController } from './provider.controller'
import auth, { UserRole } from '../../middleware/auth'
const router=express.Router()
router.post('/',auth(UserRole.CUSTOMER,UserRole.PROVIDER),providerController.createProvider)
router.get('/:id',providerController.getUniqueProvider)
export const ProviderRouter=router