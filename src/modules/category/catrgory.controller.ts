import { Request, Response } from "express"
import { categoryService } from "./category.service"


const createCategory=async(req:Request,res:Response)=>{
        try {
            
            const post= req.body
        
            // console.log(post)
          const result=await categoryService.createCategory(post.name)
            res.status(200).json({
            success:true,
            message:'provider created successfully',
            data:result
        })

        } catch (error) {
             res.status(404).json({
            success:false,
            message:'category does not  created ',
            
        })
        }
}
const getAllCategory=async(req:Request,res:Response)=>{
        try {
            
            
          const result=await categoryService.getAllCategory()
            res.status(200).json({
            success:true,
            message:'all category gate successfully',
            data:result
        })

        } catch (error) {
             res.status(404).json({
            success:false,
            message:'category does not  found ',
            
        })
        }
}
const findCategoryByName=async(req:Request,res:Response)=>{
        try {
            
            const {name}=req.params
          const result=await categoryService.findCategoryByName(name as string)
            res.status(200).json({
            success:true,
            message:'all category gate successfully',
            data:result
        })

        } catch (error) {
             res.status(404).json({
            success:false,
            message:'category does not  found ',
            
        })
        }
}
export const categoryController={
    createCategory,
    getAllCategory,
    findCategoryByName
}