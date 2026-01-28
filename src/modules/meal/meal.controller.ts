import { Request, Response } from "express"
import { mealService } from "./meal.service"

const createMeals=async(req:Request,res:Response)=>{
        try {
            
            const data=req.body
            const fullUser= req.user
            if(fullUser?.role==="CUSTOMER"){
            res.status(404).json({
            success:false,
            message:'you are not authorized',
           
        })
            }
            
             const result = await mealService.createMeals(data)
            res.status(200).json({
            success:true,
            message:'  get provider successfully',
            data:result
        })

        } catch (error) {
             res.status(404).json({
            success:false,
            message:'provider does not  created ',
            
        })
        }
}
const getAllMeals=async(req:Request,res:Response)=>{
        try {
            
        const {search}=req.query

        const searchString= typeof search == 'string'?search:undefined
          const result=await mealService.getAllMeals(searchString as string)
            res.status(200).json({
            success:true,
            message:'all meals gate successfully',
            data:result
        })

        } catch (error) {
             res.status(404).json({
            success:false,
            message:'meals does not  found ',
            
        })
        }
}

const getMealById=async(req:Request,res:Response)=>{
        try {
            
        const {id}=req.params

        
          const result=await mealService.getMealById(id as string)
            res.status(200).json({
            success:true,
            message:'get single meal successfully',
            data:result
        })

        } catch (error) {
             res.status(404).json({
            success:false,
            message:'meals does not  found ',
            
        })
        }
}
export const mealsController={
    createMeals,
    getAllMeals,
    getMealById
}