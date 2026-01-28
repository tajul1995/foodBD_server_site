import { Meal } from "../../../generated/prisma/client"
import { prisma } from "../../lib/prisma"


const createMeals=async(data:Meal)=>{
    return await prisma.meal.create({
        data
    })
    
}
const getAllMeals=async()=>{
  return await prisma.meal.findMany()
}
export const mealService={
    createMeals,
    getAllMeals
}