import { Order } from "../../../generated/prisma/client"
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
export const orderServices={
    createOrder,
    getAllOrders
}