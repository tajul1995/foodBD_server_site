import { Request, Response } from "express"
import { orderServices } from "./order.service"

const createOrder=async(req:Request,res:Response)=>{
        try {
            
            const post= req.body
            const fullUser= req.user
            post.customerId=fullUser?.id
            
           console.log(req.user)
            const result= await orderServices.createOrder(post)
            res.status(200).json({
            success:true,
            message:'order created successfully',
            data:result
        })

        } catch (error) {
             res.status(404).json({
            success:false,
            message:'order does not  created ',
            
        })
        }
}
export const orderController={
    createOrder
}