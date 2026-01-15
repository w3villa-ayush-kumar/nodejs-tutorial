import jwt from "jsonwebtoken";

export const isAuthenticated = (req, res, next) => {
    try {
        const token = req.headers.token;

        if (!token) {
            return res.status(401).json({
                message: "Access denied. Token missing",
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({
            message: "Invalid or expired token",
        });
    }
};

export const authorizeAdmin = (req, res, next) => {
    try {
        if (!req.user) {
            return res.status(401).json({
                message: "Unauthorized. User not authenticated",
            });
        }

        if (req.user.role !== "admin") {
            return res.status(403).json({
                message: "Access denied. Admins only",
            });
        }

        next();
    } catch (error) {
        return res.status(500).json({
            message: "Authorization failed",
        });
    }
};

