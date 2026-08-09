import dotenv from "dotenv";
import app from "../src/app.js";
import connectDB from "../src/database/db.js";

dotenv.config();

let isConnected = false;

export default async function handler(req, res) {
  try {
    if (!isConnected) {
      await connectDB();
      isConnected = true;
    }

    return app(req, res);
  } catch (error) {
    console.error("Vercel backend error:", error);

    return res.status(500).json({
      success: false,
      statusCode: 500,
      message: error.message || "Server error",
    });
  }
}
