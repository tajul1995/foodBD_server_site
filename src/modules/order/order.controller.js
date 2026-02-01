import { orderServices } from "./order.service";
const createOrder = async (req, res) => {
    try {
        const post = req.body;
        const fullUser = req.user;
        post.customerId = fullUser?.id;
        console.log("user", fullUser);
        const result = await orderServices.createOrder(post);
        res.status(200).json({
            success: true,
            message: 'order created successfully',
            data: result
        });
    }
    catch (error) {
        res.status(404).json({
            success: false,
            message: 'order does not  created ',
        });
    }
};
const getAllOrders = async (req, res) => {
    try {
        // const permission=req.user
        // console.log(permission?.role)
        // if(permission?.role!==UserRole.PROVIDER){
        // res.status(404).json({
        // success:false,
        // message:'unauthorized access',
        // })}
        const result = await orderServices.getAllOrders();
        res.status(200).json({
            success: true,
            message: '  get all orders successfully',
            data: result
        });
    }
    catch (error) {
        res.status(404).json({
            success: false,
            message: 'orders does not  found ',
        });
    }
};
const updateOrderStatus = async (req, res) => {
    try {
        const body = req.body;
        const { id } = req.params;
        const permission = req.user;
        console.log(permission?.role);
        // if(permission?.role!==UserRole.PROVIDER){
        // res.status(404).json({
        // success:false,
        // message:'unauthorized access',
        // })}
        // if(permission?.role!==UserRole.ADMIN){
        // res.status(404).json({
        // success:false,
        // message:'unauthorized access',
        // })}
        const result = await orderServices.updateOrderStatus(id, body?.status);
        res.status(200).json({
            success: true,
            message: '  get  orders successfully',
            data: result
        });
    }
    catch (error) {
        res.status(404).json({
            success: false,
            message: 'orders does not  found ',
        });
    }
};
const getOrdersByid = async (req, res) => {
    try {
        // const permission=req.user
        // console.log(permission?.role)
        // if(permission?.role!==UserRole.PROVIDER){
        // res.status(404).json({
        // success:false,
        // message:'unauthorized access',
        // })}
        const { id } = req.params;
        const result = await orderServices.getOrdersByid(id);
        res.status(200).json({
            success: true,
            message: '  get all orders successfully',
            data: result
        });
    }
    catch (error) {
        res.status(404).json({
            success: false,
            message: 'orders does not  found ',
        });
    }
};
export const orderController = {
    createOrder,
    getAllOrders,
    updateOrderStatus,
    getOrdersByid
};
