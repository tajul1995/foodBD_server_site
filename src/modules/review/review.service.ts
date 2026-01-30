import { Review } from "../../../generated/prisma/client"
import { prisma } from "../../lib/prisma"

const createReviews=async(data:Review)=>{
  return await prisma.review.create({
    data
  })
}
export const reviewServices={
    createReviews
}