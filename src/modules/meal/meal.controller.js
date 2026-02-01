import { mealService } from "./meal.service";
const createMeals = async (req, res) => {
    try {
        const data = req.body;
        const fullUser = req.user;
        console.log(fullUser)
        if (fullUser?.role === "CUSTOMER") {
            res.status(404).json({
                success: false,
                message: 'you are not authorized',
            });
        }
            const Id=fullUser.id
        const result = await mealService.createMeals(data,Id  );
        res.status(200).json({
            success: true,
            message: ' crteate meal successfully',
            data: result
        });
    }
    catch (error) {
        res.status(404).json({
            success: false,
            message: 'meal does not  created ',
        });
    }
};
const getAllMeals = async (req, res) => {
    try {
        const { search } = req.query;
        const searchString = typeof search == 'string' ? search : undefined;
        const result = await mealService.getAllMeals(searchString);
        res.status(200).json({
            success: true,
            message: 'all meals gate successfully',
            data: result
        });
    }
    catch (error) {
        res.status(404).json({
            success: false,
            message: 'meals does not  found ',
        });
    }
};
const getMealById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await mealService.getMealById(id);
        res.status(200).json({
            success: true,
            message: 'get single meal successfully',
            data: result
        });
    }
    catch (error) {
        res.status(404).json({
            success: false,
            message: 'meals does not  found ',
        });
    }
};
export const mealsController = {
    createMeals,
    getAllMeals,
    getMealById
};
