import express from 'express'

import { providerController } from './provider.controller'
import auth, { UserRole } from '../../middleware/auth'
const router=express.Router()
router.post('/',auth(UserRole.CUSTOMER,UserRole.PROVIDER),providerController.createProvider)
router.get('/',auth(UserRole.CUSTOMER,UserRole.PROVIDER),providerController.getUniqueProvider)
export const ProviderRouter=router