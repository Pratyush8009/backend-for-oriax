import express from "express";
import { connectDB } from "./config/db.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 4000;

// Body Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API endpoints
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
    res.send("E-commerce Auth API is working");
});

// Start Server
const startServer = async () => {
    try {
        await connectDB();
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
};

startServer();