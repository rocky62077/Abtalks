import mongoose from "mongoose";

const proofSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    day: {
      type: Number,
      required: true,
      min: 1,
      max: 60,
    },

    githubUrl: {
      type: String,
      required: true,
      trim: true,
    },

    linkedinUrl: {
      type: String,
      required: true,
      trim: true,
    },

    submittedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  },
);

// One user can submit only one proof for each day
proofSchema.index({ user: 1, day: 1 }, { unique: true });

const Proof = mongoose.model("Proof", proofSchema);

export default Proof;
