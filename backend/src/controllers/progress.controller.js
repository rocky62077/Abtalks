import Progress from "../models/progress.model.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";

// Get current user's progress
export const getProgress = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  let progress = await Progress.findOne({
    user: userId,
  });

  // Create progress automatically for a new user
  if (!progress) {
    progress = await Progress.create({
      user: userId,
      completedDays: 0,
      streak: 0,
      currentDay: 1,
      lastCompletedDay: 0,
    });
  }

  return res
    .status(200)
    .json(new ApiResponse(200, "Progress fetched successfully", progress));
});

// Update current user's progress
export const updateProgress = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  const { completedDays, streak, currentDay, lastCompletedDay } = req.body;

  if (
    completedDays === undefined &&
    streak === undefined &&
    currentDay === undefined &&
    lastCompletedDay === undefined
  ) {
    throw new ApiError(400, "At least one progress field is required.");
  }

  let progress = await Progress.findOne({
    user: userId,
  });

  if (!progress) {
    progress = new Progress({
      user: userId,
    });
  }

  if (completedDays !== undefined) {
    progress.completedDays = completedDays;
  }

  if (streak !== undefined) {
    progress.streak = streak;
  }

  if (currentDay !== undefined) {
    progress.currentDay = currentDay;
  }

  if (lastCompletedDay !== undefined) {
    progress.lastCompletedDay = lastCompletedDay;
  }

  await progress.save();

  return res
    .status(200)
    .json(new ApiResponse(200, "Progress updated successfully", progress));
});
