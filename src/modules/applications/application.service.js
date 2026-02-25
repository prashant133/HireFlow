const ApiError = require("../../utils/ApiError");
const Application = require("../applications/application.model");
const Job = require("../jobs/job.model");

const applyJob = async ({ jobId, candiateId }) => {
  const job = await Job.findById(jobId);

  if (!job) {
    throw new ApiError(404, "Job not found");
  }

  try {
    // console.log(candiateId)
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

const updateApplicationStatus = async ({
  applicationId,
  recruiterId,
  status,
}) => {
  // console.log("second status", status);
  const application = await Application.findById(applicationId);
  // console.log(application);

  if (!application) {
    throw new ApiError(404, "Application not found");
  }

  const job = await Job.findById(application.jobId);

  if (!job) {
    throw new ApiError(404, "No job found");
  }
  // owership check
  if (job.recruiterId.toString() !== recruiterId) {
    throw new ApiError(403, "Not allowed to update this application");
  }

  // console.log(application.status)

  application.status = status;

  await application.save();
  // console.log(application);
  return application;
};

const viewMyApplication = async ({ candiateId }) => {
  const myApplication = await Application.find({ candiateId }).sort({
    createdAt: -1,
  });
  return myApplication;
};

module.exports = { applyJob, updateApplicationStatus, viewMyApplication };
