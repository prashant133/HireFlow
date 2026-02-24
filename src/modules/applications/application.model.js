const mongoose = require("mongoose");

const applicationSchema = mongoose.Schema(
  {
    jobId: {
      type: mongoose.Schema.ObjectId,
      ref: "Job",
      required: true,
    },
    candiateId: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    // resume: {
    //   type: String, // cloudinary
    //   required: true,
    // },
    status: {
      type: String,
      enum: ["APPLIED", "REVIEWED", "INTERVIEW", "OFFER", "HIRED", "REJECTED"],
      default: "APPLIED",
    },
  },
  { timestamps: true },
);

// Prevent duplicate applications
applicationSchema.index({ jobId: 1, candidateId: 1 }, { unique: true }); // 
// job1 and candiateId 1 means ascending order (sort by jodId then by candidateId)
// this is one combined index

// A candidate can apply to many jobs
// A job can have many candidates
// But one candidate cannot apply to the same job twice
 

const Application = mongoose.model("Application", applicationSchema);
module.exports = Application;
