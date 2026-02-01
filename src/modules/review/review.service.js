import { prisma } from "../../lib/prisma";
const createReviews = async (data) => {
    return await prisma.review.create({
        data
    });
};
const getAllReviews = async () => {
    return await prisma.review.findMany({
        include: {
            user: true
        },
        orderBy: {
            createdAt: "desc"
        }
    });
};
const deleteReviews = async (id) => {
    return await prisma.review.delete({
        where: {
            id
        }
    });
};
export const reviewServices = {
    createReviews,
    getAllReviews,
    deleteReviews
};
