const applicationService = require("../applications/application.service");
const ApiResponse = require("../../utils/ApiResponse");
const asyncHandler = require("../../utils/asyncHandler");

const applyJob = asyncHandler(async (req, res, next) => {
  const jobId = req.params.jobId;
  const candiateId = req.user.userId;

  const application = await applicationService.applyJob({ jobId, candiateId });

  return res
    .status(200)
    .json(new ApiResponse(200, application, "Applied Successfully"));
});

module.exports = { applyJob };
