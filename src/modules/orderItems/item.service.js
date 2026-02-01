import { prisma } from '../../lib/prisma';
const createOrderItem = async (data) => {
    const result = await prisma.orderItem.create({
        data
    });
    return result;
};
export const itemServices = {
    createOrderItem
};
