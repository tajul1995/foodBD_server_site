import { Order, OrderStatus } from "../../../generated/prisma/client"
import { prisma } from "../../lib/prisma"

const createOrder=async(data:Omit<Order,"id"|"status">)=>{
    const provider=await prisma.provider.findUnique({
        where:{
            userId:data.customerId
        }
    })
    if(provider){
        data.providerId=provider.id
    }
    console.log("provider",provider)
   return await prisma.order.create({
    data
   })
}
const getAllOrders=async()=>{
    return await prisma.order.findMany()
}
const updateOrderStatus=async(id:string,status:OrderStatus)=>{
    return await prisma.order.update({
        where:{
            id
        },
        data:{
            status 
        }
    })
}
export const orderServices={
    createOrder,
    getAllOrders,
    updateOrderStatus
}