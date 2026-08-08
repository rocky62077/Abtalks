import express from "express";

import verifyJWT from "../middlewares/auth.middleware.js";

import {
  getProgress,
  updateProgress,
} from "../controllers/progress.controller.js";

const router = express.Router();

// Get logged-in user's progress
router.get("/", verifyJWT, getProgress);

// Update logged-in user's progress
router.patch("/", verifyJWT, updateProgress);

export default router;
