import Proof from "../models/proof.model.js";
import Progress from "../models/progress.model.js";

import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";

// ==========================================
// CREATE PROOF
// ==========================================

export const createProof = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  const { day, githubUrl, linkedinUrl } = req.body;

  // ==========================================
  // VALIDATE REQUIRED FIELDS
  // ==========================================

  if (!day || !githubUrl || !linkedinUrl) {
    throw new ApiError(400, "Day, GitHub URL and LinkedIn URL are required.");
  }

  // ==========================================
  // VALIDATE DAY
  // ==========================================

  const challengeDay = Number(day);

  if (
    !Number.isInteger(challengeDay) ||
    challengeDay < 1 ||
    challengeDay > 60
  ) {
    throw new ApiError(400, "Day must be between 1 and 60.");
  }

  // ==========================================
  // GET USER PROGRESS
  // ==========================================

  let progress = await Progress.findOne({
    user: userId,
  });

  // Create progress if it doesn't exist
  if (!progress) {
    progress = await Progress.create({
      user: userId,
      completedDays: 0,
      streak: 0,
      currentDay: 1,
      lastCompletedDay: 0,
    });
  }

  // ==========================================
  // CHECK THAT USER IS SUBMITTING CURRENT DAY
  // ==========================================

  if (challengeDay !== progress.currentDay) {
    throw new ApiError(
      400,
      `You must complete Day ${progress.currentDay} first.`,
    );
  }

  // ==========================================
  // CHECK IF PROOF ALREADY EXISTS
  // ==========================================

  const existingProof = await Proof.findOne({
    user: userId,
    day: challengeDay,
  });

  if (existingProof) {
    throw new ApiError(
      409,
      `Proof for day ${challengeDay} has already been submitted.`,
    );
  }

  // ==========================================
  // CREATE PROOF
  // ==========================================

  const proof = await Proof.create({
    user: userId,
    day: challengeDay,
    githubUrl: githubUrl.trim(),
    linkedinUrl: linkedinUrl.trim(),
  });

  // ==========================================
  // UPDATE PROGRESS
  // ==========================================

  progress.completedDays = challengeDay;

  progress.lastCompletedDay = challengeDay;

  // Move to next day
  if (challengeDay < 60) {
    progress.currentDay = challengeDay + 1;
  } else {
    progress.currentDay = 60;
  }

  // Increase streak
  progress.streak = progress.streak + 1;

  await progress.save();

  // ==========================================
  // RESPONSE
  // ==========================================

  return res.status(201).json(
    new ApiResponse(201, "Proof submitted and progress updated successfully", {
      proof,
      progress,
    }),
  );
});

// ==========================================
// GET ALL PROOFS FOR CURRENT USER
// ==========================================

export const getMyProofs = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  const proofs = await Proof.find({
    user: userId,
  }).sort({
    day: 1,
  });

  return res
    .status(200)
    .json(new ApiResponse(200, "Proofs fetched successfully", proofs));
});

// ==========================================
// GET PROOF FOR A SPECIFIC DAY
// ==========================================

export const getProofByDay = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  const day = Number(req.params.day);

  if (!day || day < 1 || day > 60) {
    throw new ApiError(400, "Day must be between 1 and 60.");
  }

  const proof = await Proof.findOne({
    user: userId,
    day,
  });

  if (!proof) {
    throw new ApiError(404, `No proof found for day ${day}.`);
  }

  return res
    .status(200)
    .json(new ApiResponse(200, "Proof fetched successfully", proof));
});
