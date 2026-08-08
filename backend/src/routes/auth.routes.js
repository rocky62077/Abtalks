import express from "express";
import verifyJWT from "../middlewares/auth.middleware.js";
import {
  registerUser,
  loginUser,
  getCurrentUser,
} from "../controllers/auth.controller.js";

const router = express.Router();

// Register User
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", verifyJWT, getCurrentUser);
export default router;
