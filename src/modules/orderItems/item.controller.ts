import { Request, Response } from 'express';
import { OrderItem } from './../../../generated/prisma/client';
import { itemServices } from "./item.service"

const createOrderItem=async(req:Request,res:Response)=>{
        try {
            
            const post= req.body
            // const fulluser= req.user
            //  post.userId=fulluser?.id
            // console.log(post,fulluser)
            const result= await itemServices.createOrderItem(post)
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
export const  itemController={
    createOrderItem
}