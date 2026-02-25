const applicationService = require("../applications/application.service");
const ApiResponse = require("../../utils/ApiResponse");
const asyncHandler = require("../../utils/asyncHandler");
const Application = require("./application.model");

const applyJob = asyncHandler(async (req, res, next) => {
  const jobId = req.params.jobId;
  const candiateId = req.user.userId;

  const application = await applicationService.applyJob({ jobId, candiateId });

  return res
    .status(200)
    .json(new ApiResponse(200, application, "Applied Successfully"));
});

const updateApplicationStatus = asyncHandler(async (req, res, next) => {
  const applicationId = req.params.applicationId;
  const recruiterId = req.user.userId;
  const { status } = req.body;

  const updated = await applicationService.updateApplicationStatus({
    applicationId,
    recruiterId,
    status,
  });

  res
    .status(200)
    .json(new ApiResponse(200, updated, "Application updated successfully"));
});

const viewMyApplication = asyncHandler(async (req, res, next) => {
  const candiateId = req.user.userId;

  const myApplication = await applicationService.viewMyApplication({
    candiateId,
  });

  return res
    .status(200)
    .json(
      new ApiResponse(200, myApplication, "Application fetch successfully"),
    );
});

module.exports = { applyJob, updateApplicationStatus, viewMyApplication };
