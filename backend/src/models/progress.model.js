import mongoose from "mongoose";

const progressSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    completedDays: {
      type: Number,
      default: 0,
      min: 0,
      max: 60,
    },

    streak: {
      type: Number,
      default: 0,
      min: 0,
    },

    currentDay: {
      type: Number,
      default: 1,
      min: 1,
      max: 60,
    },

    lastCompletedDay: {
      type: Number,
      default: 0,
      min: 0,
      max: 60,
    },
  },
  {
    timestamps: true,
  },
);

const Progress = mongoose.model("Progress", progressSchema);

export default Progress;
