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

const updateUser=async(req:Request,res:Response)=>{
        try {
            const body=req.body
            const {id}=req.params
            const permission=req.user
            console.log(permission?.role)
            // if(permission?.role!==UserRole.PROVIDER){
            // res.status(404).json({
            // success:false,
            // message:'unauthorized access',
            
            // })}
            // if(permission?.role!==UserRole.ADMIN){
            // res.status(404).json({
            // success:false,
            // message:'unauthorized access',
            
            // })}
           
             const result = await userService.updateUser (id as string, body?.role )
            res.status(200).json({
            success:true,
            message:' updated user successfully',
            data:result
        })

        } catch (error) {
             res.status(404).json({
            success:false,
            message:'users does not  found ',
            
        })
        }
}

export const userController={
        getAllUser,
        updateUser
}