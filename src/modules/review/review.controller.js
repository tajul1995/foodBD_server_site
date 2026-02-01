import { reviewServices } from "./review.service";
const createReviews = async (req, res) => {
    try {
        const post = req.body;
        const fulluser= req.user
        post.userId=fulluser?.id
        console.log(post,fulluser)
        const result = await reviewServices.createReviews(post);
        res.status(200).json({
            success: true,
            message: 'review created successfully',
            data: result
        });
    }
    catch (error) {
        res.status(404).json({
            success: false,
            message: 'review does not  created ',
        });
    }
};
const getAllReviews = async (req, res) => {
    try {
        // const fulluser= req.user
        // post.userId=fulluser?.id
        // console.log(post,fulluser)
        const result = await reviewServices.getAllReviews();
        res.status(200).json({
            success: true,
            message: 'review created successfully',
            data: result
        });
    }
    catch (error) {
        res.status(404).json({
            success: false,
            message: 'review does not  created ',
        });
    }
};
const deleteReviews = async (req, res) => {
    try {
        const { id } = req.params;
        // const fulluser= req.user
        // post.userId=fulluser?.id
        // console.log(post,fulluser)
        const result = await reviewServices.deleteReviews(id);
        res.status(200).json({
            success: true,
            message: 'review deleted successfully',
            data: result
        });
    }
    catch (error) {
        res.status(404).json({
            success: false,
            message: 'review does not  deleted ',
        });
    }
};
export const reviewController = {
    createReviews,
    getAllReviews,
    deleteReviews
};
