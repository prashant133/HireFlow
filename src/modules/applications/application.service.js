const ApiError = require("../../utils/ApiError");
const Application = require("../applications/application.model");
const Job = require("../jobs/job.model");

const applyJob = async ({ jobId, candiateId }) => {
  const job = await Job.findById(jobId);

  if (!job) {
    throw new ApiError(404, "Job not found");
  }

  try {
    console.log(candiateId)
    const application = await Application.create({
      jobId,
      candiateId,
      status: "APPLIED",
    });

    return application;
  } catch (error) {
    if (error.code === 11000) {
      throw new ApiError(400, "You already applied to this job");
    }
    throw error;
  }
};

module.exports = { applyJob };
