import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ success: false, message: "Not Authorized. Login again" });
    }

    const token = authHeader.split(" ")[1];

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
        if (tokenDecode.id) {
            req.userId = tokenDecode.id;
            next();
        } else {
            return res.status(401).json({ success: false, message: "Not Authorized. Login again" });
        }
    } catch (error) {
        console.error("Auth Middleware Error:", error.message);
        return res.status(401).json({ success: false, message: "Token invalid or expired" });
    }
};

export default authMiddleware;