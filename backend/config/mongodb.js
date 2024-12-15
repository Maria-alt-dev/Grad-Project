import mongoose from "mongoose";

// MongoDB connection URI
const MONGO_URI = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/Lebanon_Smile');
        console.log("MongoDB connected successfully.");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};

export default connectDB;
