import express from 'express';
import { categoryController } from './catrgory.controller';
const router = express.Router();
router.get('/', categoryController.getAllCategory);
router.get('/:name', categoryController.findCategoryByName);
router.post('/', categoryController.createCategory);
export const categoryRouter = router;
