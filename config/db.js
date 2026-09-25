import mongoose from "mongoose";
import "dotenv/config";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log("Database Connected");
    } catch (error) {
        console.error("Database Connection Error:", error);
        throw error;
    }
};