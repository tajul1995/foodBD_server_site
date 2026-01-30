import { OrderItem } from '../../../generated/prisma/client';
import { prisma } from '../../lib/prisma';



const createOrderItem=async(data:OrderItem)=>{
    const result= await prisma.orderItem.create({
        data
    })
    return result
}
export const itemServices={
    createOrderItem
}