import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import progressRoutes from "./routes/progress.routes.js";
import authRoutes from "./routes/auth.routes.js";

import healthRoutes from "./routes/health.routes.js";
import notFound from "./middlewares/notFound.middleware.js";

import errorHandler from "./middlewares/error.middleware.js";
import proofRoutes from "./routes/proof.routes.js";
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(cookieParser());

// Health Check Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "ProofLeJanta API is running 🚀",
  });
});
app.use("/api/v1/health", healthRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/progress", progressRoutes);
app.use("/api/v1/proofs", proofRoutes);
app.use(notFound);
app.use(errorHandler);

export default app;
