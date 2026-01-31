import { Request, Response } from "express"
import { reviewServices } from "./review.service"

const  createReviews=async(req:Request,res:Response)=>{
        try {
            
            const post= req.body
            // const fulluser= req.user
            // post.userId=fulluser?.id
            // console.log(post,fulluser)
            const result= await reviewServices.createReviews(post)
            res.status(200).json({
            success:true,
            message:'review created successfully',
            data:result
        })

        } catch (error) {
             res.status(404).json({
            success:false,
            message:'review does not  created ',
            
        })
        }
}

const  getAllReviews=async(req:Request,res:Response)=>{
        try {
            
            
            // const fulluser= req.user
            // post.userId=fulluser?.id
            // console.log(post,fulluser)
            const result= await reviewServices.getAllReviews()
            res.status(200).json({
            success:true,
            message:'review created successfully',
            data:result
        })

        } catch (error) {
             res.status(404).json({
            success:false,
            message:'review does not  created ',
            
        })
        }
}
export const reviewController={
    createReviews,
    getAllReviews
}