import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, default: "" },
    email: { type: String, default: "", lowercase: true, trim: true },
    password: { type: String, default: "" },
    phone: { type: String, required: true, unique: true, trim: true },
    profilePic: { type: String, default: "" },
    
    verifyOtp: { type: String, default: "" },
    VerifyOtpExpireAt: { type: Number, default: 0 },
    isVerify: { type: Boolean, default: false },
    isActive: { type: Boolean, default: false },
    isAdmin: { type: Boolean, default: false },
}, { timestamps: true, minimize: false });

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;