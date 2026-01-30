import { Role } from "../../../generated/prisma/enums"
import { prisma } from "../../lib/prisma"

const getAllUser=async()=>{
  return await prisma.user.findMany()
}

const updateUser=async(id:string,role:Role)=>{
    return await prisma.user.update({
        where:{
            id
        },
        data:{
            role
        },
        
    })
}

export const userService={
    getAllUser,
    updateUser
}