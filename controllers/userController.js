import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import transporter from "../config/mail.js";
import cloudinary from "../config/cloudinary.js";
import axios from "axios";

// Helper to generate 7-day JWT token
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// Send OTP via 2Factor.in SMS API
const sendSmsOtp = async (phone, otp) => {
    const apiKey = process.env.SMS_GETWAY;
    console.log("ths sms getway key is :", apiKey)
    const formattedPhone = phone.startsWith("+91") ? phone : `+91${phone}`;
    const url = `https://2factor.in/API/V1/${apiKey}/SMS/${formattedPhone}/${otp}/OTP1`;

    await axios.get(url);
};

// 1. Send Login / Registration Phone OTP
export const login = async (req, res) => {
    const { phone } = req.body;

    if (!phone || String(phone).length !== 10) {
        return res.status(400).json({ success: false, message: "Please provide a valid 10-digit phone number" });
    }

    try {
        const otp = String(Math.floor(100000 + Math.random() * 900000));
        const otpExpireAt = Date.now() + 5 * 60 * 1000; // 15 Minutes expiry

        let user = await userModel.findOne({ phone });

        if (!user) {
            user = new userModel({
                phone,
                verifyOtp: otp,
                VerifyOtpExpireAt: otpExpireAt
            });
        } else {
            user.verifyOtp = otp;
            user.VerifyOtpExpireAt = otpExpireAt;
        }

        await user.save();
        await sendSmsOtp(phone, otp);

        return res.status(200).json({
            success: true,
            message: "OTP sent successfully to your mobile number"
        });
    } catch (error) {
        console.error("Send Phone OTP Error:", error);
        return res.status(500).json({ success: false, message: "Failed to send OTP SMS" });
    }
};

export const verifyPhoneOtp = async (req, res) => {
    const { phone, otp } = req.body;

    if (!phone || !otp) {
        return res.status(400).json({ success: false, message: "Phone number and OTP are required" });
    }

    try {
        const user = await userModel.findOne({ phone });

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found. Request OTP first" });
        }

        if (!user.verifyOtp || user.verifyOtp !== otp) {
            return res.status(400).json({ success: false, message: "Invalid OTP" });
        }

        if (user.VerifyOtpExpireAt < Date.now()) {
            return res.status(410).json({ success: false, message: "OTP Expired" });
        }

        const isNewUser = !user.isVerify;

        // Clear OTP states
        user.isVerify = true;
        user.isActive = true;
        user.verifyOtp = "";
        user.VerifyOtpExpireAt = 0;
        user.name = "User"

        await user.save();

        const token = createToken(user._id);

        // Send Welcome Email if Email is provided
        if (user.email && isNewUser) {
            const mailOptions = {
                from: process.env.SENDER_EMAIL,
                to: user.email,
                subject: "Welcome to Orvix E-Commerce!",
                html: `
                    <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
                        <h2>Welcome to Orvix${user.name ? `, ${user.name}` : ''}! 🎉</h2>
                        <p>Your account has been successfully verified and activated.</p>
                        <p>Enjoy your seamless shopping experience with us.</p>
                        <br/>
                        <p>Best Regards,<br/><strong>The Orvix Team</strong></p>
                    </div>
                `
            };
            transporter.sendMail(mailOptions).catch(err => console.error("Error sending welcome email:", err));
        }

        return res.status(200).json({
            success: true,
            message: isNewUser ? "Account verified and registered successfully!" : "Login successful!",
            token
        });
    } catch (error) {
        console.error("Verify Phone OTP Error:", error);
        return res.status(500).json({ success: false, message: "Verification failed" });
    }
};

// 3. Auth Check Route
export const isAuthenticated = async (req, res) => {
    try {
        const user = await userModel.findById(req.userId).select("-verifyOtp -VerifyOtpExpireAt");
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        return res.status(200).json({ success: true, user });
    } catch (error) {
        console.error("Auth check error:", error);
        return res.status(500).json({ success: false, message: "Error verifying authentication status" });
    }
};

// 4. Fetch Profile
export const getProfile = async (req, res) => {
    try {
        const user = await userModel.findById(req.userId)
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        return res.status(200).json({ success: true, user });
    } catch (error) {
        console.error("Error fetching profile:", error);
        return res.status(500).json({ success: false, message: "Failed to fetch profile" });
    }
};

// 5. Update Profile (Name, Email, Phone)
export const updateProfile = async (req, res) => {
    try {
        const { name, email } = req.body;
        const user = await userModel.findById(req.userId);

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        if (phone && String(phone).length !== 10) {
            return res.status(400).json({ success: false, message: "Phone number must be 10 digits long" });
        }

        if (name) user.name = name;
        if (email) user.email = email;

        await user.save();

        return res.status(200).json({
            success: true,
            message: "Profile updated successfully"
        });
    } catch (error) {
        console.error("Error updating profile:", error);
        return res.status(500).json({ success: false, message: "Failed to update profile" });
    }
};


export const updateUserProfilePic = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ success: false, message: "Please upload an image file" });
        }

        const user = await userModel.findById(req.userId);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        const uploadResponse = await cloudinary.uploader.upload(req.file.path, {
            folder: "ecom_users",
        });

        user.profilePic = uploadResponse.secure_url;
        await user.save();

        return res.status(200).json({
            success: true,
            message: "Profile picture updated successfully",
            profilePic: user.profilePic
        });
    } catch (error) {
        console.error("Error updating profile picture:", error);
        return res.status(500).json({ success: false, message: "Failed to update profile picture" });
    }
};