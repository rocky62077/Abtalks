import mongoose from "mongoose";
import env from "../config/env.js";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(env.MONGODB_URI);

    console.log("MongoDB Connected");
    console.log(`Database: ${connection.connection.name}`);
    console.log(`Host: ${connection.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
