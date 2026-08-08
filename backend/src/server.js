import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./database/db.js";

dotenv.config();

const PORT = process.env.PORT || 5001;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`ABTalks Backend running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
    process.exit(1);
  });
