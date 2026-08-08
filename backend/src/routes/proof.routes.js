import express from "express";

import verifyJWT from "../middlewares/auth.middleware.js";

import {
  createProof,
  getMyProofs,
  getProofByDay,
} from "../controllers/proof.controller.js";

const router = express.Router();

// Create proof for a challenge day
router.post("/", verifyJWT, createProof);

// Get all proofs of logged-in user
router.get("/", verifyJWT, getMyProofs);

// Get proof for a specific day
router.get("/:day", verifyJWT, getProofByDay);

export default router;
