import { Request, Response } from "express"
import { userService } from "./user.service"


const getAllUser=async(req:Request,res:Response)=>{
        try {
            
          
            const result= await userService.getAllUser()
            res.status(200).json({
            success:true,
            message:'get all users successfully',
            data:result
        })

        } catch (error) {
             res.status(404).json({
            success:false,
            message:' does not  get ant users ',
            
        })
        }
}

export const userController={
        getAllUser
}