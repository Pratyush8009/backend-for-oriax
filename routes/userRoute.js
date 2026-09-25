import express from 'express';
import { 
    login, 
    verifyPhoneOtp, 
    isAuthenticated, 
    getProfile, 
    updateProfile, 
    updateUserProfilePic 
} from '../controllers/userController.js';
import authMiddleware from '../middleware/auth.js';
import upload from "../middleware/multer.js";

const userRouter = express.Router();

// Auth Endpoints
userRouter.post("/login", login);
userRouter.post("/verify-otp", verifyPhoneOtp);
userRouter.get("/is-auth", authMiddleware, isAuthenticated);

// Profile & Address Endpoints
userRouter.get("/profile", authMiddleware, getProfile);
userRouter.put("/update-profile", authMiddleware, updateProfile);
userRouter.post("/update-profile-pic", authMiddleware, upload.single("image"), updateUserProfilePic);

export default userRouter;