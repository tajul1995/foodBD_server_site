import { Review } from "../../../generated/prisma/client"
import { prisma } from "../../lib/prisma"

const createReviews=async(data:Review)=>{
  return await prisma.review.create({
    data
  })
}
const getAllReviews=async()=>{
  return await prisma.review.findMany({
    include:{
      user:true
    },
    orderBy:{
      createdAt:"desc"
    }
  })
}
const deleteReviews=async(id:string)=>{
  return await prisma.review.delete({
    where:{
      id
    }
  })
}
export const reviewServices={
    createReviews,
    getAllReviews,
    deleteReviews
}