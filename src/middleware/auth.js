import { auth as betterAuth } from "../lib/auth";
export var UserRole;
(function (UserRole) {
    UserRole["CUSTOMER"] = "CUSTOMER";
    UserRole["PROVIDER"] = "PROVIDER";
    UserRole["ADMIN"] = "ADMIN";
})(UserRole || (UserRole = {}));
const auth = (...roles) => {
    return async (req, res, next) => {
        try {
            const session = await betterAuth.api.getSession({
                headers: req.headers,
            });
            if (!session?.user) {
                return res.status(401).json({
                    success: false,
                    message: "You are not authorized!"
                });
            }
            if (!session.user.email) {
                return res.status(404).json({
                    success: true,
                    message: 'email is not verified'
                });
            }
            req.user = {
                id: session?.user.id,
                name: session?.user.name,
                email: session?.user.email,
                role: session?.user.role
            };
            if (roles.length && !roles.includes(req.user.role)) {
                return res.status(404).json({
                    success: true,
                    message: 'unauthorizea access'
                });
            }
            next();
        }
        catch (error) {
            next(error);
        }
    };
};
export default auth;
