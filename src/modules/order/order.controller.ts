import { Request, Response } from "express"
import { orderServices } from "./order.service"


const createOrder=async(req:Request,res:Response)=>{
        try {
            
            const post= req.body
            
            const fullUser= req.user
            post.customerId=fullUser?.id
           console.log("user",fullUser)
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

const getAllOrders=async(req:Request,res:Response)=>{
        try {
            
            // const permission=req.user
            // console.log(permission?.role)
            // if(permission?.role!==UserRole.PROVIDER){
            // res.status(404).json({
            // success:false,
            // message:'unauthorized access',
            
            // })}
           
             const result = await orderServices.getAllOrders ()
            res.status(200).json({
            success:true,
            message:'  get all orders successfully',
            data:result
        })

        } catch (error) {
             res.status(404).json({
            success:false,
            message:'orders does not  found ',
            
        })
        }
}

const updateOrderStatus=async(req:Request,res:Response)=>{
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
           
             const result = await orderServices.updateOrderStatus (id as string, body?.status )
            res.status(200).json({
            success:true,
            message:'  get  orders successfully',
            data:result
        })

        } catch (error) {
             res.status(404).json({
            success:false,
            message:'orders does not  found ',
            
        })
        }
}

const getOrdersByid=async(req:Request,res:Response)=>{
        try {
            
            // const permission=req.user
            // console.log(permission?.role)
            // if(permission?.role!==UserRole.PROVIDER){
            // res.status(404).json({
            // success:false,
            // message:'unauthorized access',
            
            // })}
           const fullUser=req.user

             const result = await orderServices.getOrdersByid (fullUser?.id as string)
            res.status(200).json({
            success:true,
            message:'  get all orders successfully',
            data:result
        })

        } catch (error) {
             res.status(404).json({
            success:false,
            message:'orders does not  found ',
            
        })
        }
}

export const orderController={
    createOrder,
    getAllOrders,
    updateOrderStatus,
    getOrdersByid
}