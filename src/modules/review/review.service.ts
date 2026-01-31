import { Review } from "../../../generated/prisma/client"
import { prisma } from "../../lib/prisma"

const createReviews=async(data:Review)=>{
  return await prisma.review.create({
    data
  })
}
const getAllReviews=async()=>{
  return await prisma.review.findMany()
}
export const reviewServices={
    createReviews,
    getAllReviews
}