const asyncHandler = require("../../utils/asyncHandler");
const ApiResponse = require("../../utils/ApiResponse");
const analyticsService = require("./analytics.service");

const applicantsPerJob = asyncHandler(async (req, res) => {
  const recruiterId = req.user.userId;

  const data = await analyticsService.getApplicantsPerJob(recruiterId);

  return res
    .status(200)
    .json(
      new ApiResponse(200, data, "Applicants per job fetched successfully"),
    );
});

module.exports = { applicantsPerJob };
