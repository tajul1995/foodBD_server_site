import { Order, OrderStatus } from "../../../generated/prisma/client"
import { prisma } from "../../lib/prisma"

const createOrder=async(data:Omit<Order,"id"|"status">)=>{
    
    
   
   return await prisma.order.create({
    data
   })
}
const getAllOrders=async()=>{
    return await prisma.order.findMany({
        orderBy:{
            createdAt:"desc"
        }
    })
}
const updateOrderStatus=async(id:string,status:OrderStatus)=>{
    if(status=="CANCELLED"){
        return await prisma.order.delete({
            where:{
                id
            }
        })
    }
    return await prisma.order.update({
        where:{
            id
        },
        data:{
            status 
        },
        
    })
}
const getOrdersByid=async(id:string)=>{
    return await prisma.order.findMany({
        where:{
            customerId:id
        }
    })
}
export const orderServices={
    createOrder,
    getAllOrders,
    updateOrderStatus,
    getOrdersByid
}