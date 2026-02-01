import { Meal } from "../../../generated/prisma/client"
import { MealWhereInput } from "../../../generated/prisma/models"
import { prisma } from "../../lib/prisma"


const createMeals=async(data:Meal,id : string)=>{
   const findProvider= await prisma.provider.findUniqueOrThrow({
    where:{
        userId :id
    }
   })
if(findProvider){
    data.providerId=findProvider.id
}

    return await prisma.meal.create({
        data
    })
    
}
const getAllMeals=async(search:string)=>{
    const andCondition:MealWhereInput[]=[]
    if(search){
        andCondition.push({
            OR:[{
                categoryId:{
                    contains:search
                }
            },{
                title:{
                    contains:search,
                     mode:'insensitive'
                }
            }
        ]
        })
    }
  return await prisma.meal.findMany({
    where:{
        AND:andCondition
    },
    include:{
        provider:true
      

    }

  })
}
const getMealById=async(id:string)=>{
     
        
return await prisma.meal.findUniqueOrThrow(({
    where:{
        id
    },
    include:{
        provider:true,
        reviews:true

    }
}))
}



export const mealService={
    createMeals,
    getAllMeals,
    getMealById
}