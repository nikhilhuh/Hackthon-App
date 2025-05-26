import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();
const MONGO_URI = process.env.MONGO_URI || "your-mongouri-here";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
  }
};

export default connectDB;
// Usage: Call connectDB() in your server file to establish the connection
