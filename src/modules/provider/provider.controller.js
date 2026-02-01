import { providerService } from './provider.service';
const createProvider = async (req, res) => {
    try {
        const post = req.body;
        const fulluser = req.user;
        post.userId = fulluser?.id;
        console.log(post, fulluser);
        const result = await providerService.createProvider(post);
        res.status(200).json({
            success: true,
            message: 'provider created successfully',
            data: result
        });
    }
    catch (error) {
        res.status(404).json({
            success: false,
            message: 'provider does not  created ',
        });
    }
};
const getUniqueProvider = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const result = await providerService.getUniqueProvider(id);
        res.status(200).json({
            success: true,
            message: '  get provider successfully',
            data: result
        });
    }
    catch (error) {
        res.status(404).json({
            success: false,
            message: 'provider does not  created ',
        });
    }
};
export const providerController = {
    createProvider,
    getUniqueProvider
};
