import { prisma } from "../../lib/prisma";
const createMeals = async (data, id) => {
    const findProvider = await prisma.provider.findUniqueOrThrow({
        where: {
            userId: id
        }
    });
    if (findProvider) {
        data.providerId = findProvider.id;
    }
    return await prisma.meal.create({
        data
    });
};
const getAllMeals = async (search) => {
    const andCondition = [];
    if (search) {
        andCondition.push({
            OR: [{
                    categoryId: {
                        contains: search
                    }
                }, {
                    title: {
                        contains: search,
                        mode: 'insensitive'
                    }
                }
            ]
        });
    }
    return await prisma.meal.findMany({
        where: {
            AND: andCondition
        },
        include: {
            provider: true
        }
    });
};
const getMealById = async (id) => {
    return await prisma.meal.findFirst(({
        where: {
            id
        },
        include: {
            provider: true
        }
    }));
};
export const mealService = {
    createMeals,
    getAllMeals,
    getMealById
};
