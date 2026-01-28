import { prisma } from "../../lib/prisma"


const createCategory= async(category:string)=>{
    const result= await prisma.category.create({
        data:{
            name:category
        }
    })
    return result
}
const getAllCategory=async()=>{
  return await prisma.category.findMany()
}
const findCategoryByName=async(name:string)=>{
    return await prisma.category.findFirst({
        where:{
            name
        }
    })
}
export const categoryService={
   createCategory,
   getAllCategory,
   findCategoryByName
}