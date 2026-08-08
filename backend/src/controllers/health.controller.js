import ApiResponse from "../utils/ApiResponse.js";

export const healthCheck = (req, res) => {
  res
    .status(200)
    .json(new ApiResponse(200, "Server is running successfully"));
};
