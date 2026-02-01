import { prisma } from "../../lib/prisma";
const getAllUser = async () => {
    return await prisma.user.findMany({
        orderBy: {
            createdAt: "desc"
        }
    });
};
const updateUser = async (id, role) => {
    return await prisma.user.update({
        where: {
            id
        },
        data: {
            role
        },
    });
};
export const userService = {
    getAllUser,
    updateUser
};
