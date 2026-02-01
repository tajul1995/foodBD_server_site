import { prisma } from "../../lib/prisma";
const createProvider = async (data) => {
    const result = await prisma.provider.create({
        data
    });
    return result;
};
const getUniqueProvider = async (id) => {
    return await prisma.provider.findUniqueOrThrow({
        where: {
            userId: id
        }
    });
};
export const providerService = {
    createProvider,
    getUniqueProvider
};
