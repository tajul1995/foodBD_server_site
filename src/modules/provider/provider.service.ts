import { Provider } from "../../../generated/prisma/client"
import { prisma } from "../../lib/prisma"

const createProvider= async(data:Omit<Provider,"id"|"createdAt"|"updatedAt">)=>{
    const result= await prisma.provider.create({
        data
    })
    return result
}
const getUniqueProvider= async(id:string)=>{
    return await prisma.provider.findUniqueOrThrow({
        where:{
            userId:id
        }
    })
}
export const providerService={
    createProvider,
    getUniqueProvider
}