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
            
            
          const result=await mealService.getAllMeals()
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

export const mealsController={
    createMeals,
    getAllMeals
}