const ApiError = require("../../utils/ApiError");
const ApiResponse = require("../../utils/ApiResponse");
const asyncHandler = require("../../utils/asyncHandler");
const jobService = require("../jobs/job.service");

const create = asyncHandler(async (req, res, next) => {
  const recruiterId = req.user.userId;

  const job = await jobService.createJob({ ...req.body, recruiterId });
  return res
    .status(201)
    .json(new ApiResponse(201, job, "job created succesfully"));
});

const getAllJob = asyncHandler(async (req, res, next) => {
  const jobs = await jobService.getAllJob();
  return res
    .status(200)
    .json(new ApiResponse(200, jobs, "Jobs fetched successfully"));
});

const getMyJob = asyncHandler(async (req, res, next) => {
  const recruiterId = req.user.userId;

  const myJob = await jobService.getMyJob(recruiterId);

  return res
    .status(200)
    .json(new ApiResponse(200, myJob, "Job fetched successfully"));
});

const updateJob = asyncHandler(async (req, res, next) => {
  const jobId = req.params.jobId;
  const recruiterId = req.user.userId;

  const updatedjob = await jobService.updateJob({
    jobId,
    recruiterId,
    updateData: req.body,
  });

  if (!updatedjob) {
    throw new ApiError(403, "Not Allowed to update this job");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, updatedjob, "Job updated successfully"));
});

const deleteJob = asyncHandler(async (req, res, next) => {
  const jobId = req.params.jobId;
  const recruiterId = req.user.userId;

  const deletedJob = await jobService.deleteJob({ jobId, recruiterId });

  if (!deletedJob) {
    throw new ApiError(404, "Job not allowed to delete");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, deletedJob, "Job deleted successfully"));
});

module.exports = { create, getAllJob, getMyJob, updateJob, deleteJob };
