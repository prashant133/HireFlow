const mongoose = require("mongoose");

const applicationSchema = mongoose.Schema(
  {
    jobId: {
      type: mongoose.Schema.ObjectId,
      ref: "Job",
      required: true,
    },
    candidateId: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    resume: {
      type: String, // cloudinary
      required: true,
    },
    status: {
      type: String,
      enum: ["APPLIED", "REVIEWED", "INTERVIEW", "OFFER", "HIRED", "REJECTED"],
      default: "APPLIED",
    },
  },
  { timestamps: true },
);

const Application = mongoose.model("Application", applicationSchema);
module.exports = Application;
