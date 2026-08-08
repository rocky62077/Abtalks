import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import env from "../config/env.js";

const verifyJWT = asyncHandler(async (req, res, next) => {
  // Step 1: Get token from Cookie or Authorization Header
  const token =
    req.cookies?.accessToken ||
    req.header("Authorization")?.replace("Bearer ", "");

  // Step 2: Check if token exists
  if (!token) {
    throw new ApiError(401, "Unauthorized request. Please login.");
  }

  // Step 3: Verify token
  const decodedToken = jwt.verify(token, env.JWT_SECRET);
  console.log("Decode Token :", decodedToken);
  // Step 4: Find user from database
  const user = await User.findById(decodedToken._id).select("-password");
  console.log("User Found:", user);
  // Step 5: Check if user exists
  if (!user) {
    throw new ApiError(401, "Invalid Access Token");
  }

  // Step 6: Attach user to request object
  req.user = user;

  // Step 7: Continue to next middleware/controller
  next();
});

export default verifyJWT;
