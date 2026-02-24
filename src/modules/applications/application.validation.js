const { param, body } = require("express-validator");

const applyValidation = [
  param("jobId").isMongoId().withMessage("Invalid jobId"),
];

const updateApplicationStatusValidation = [
  param("applicationId").isMongoId().withMessage("Invalid appliation Id"),
  body("status")
    .isIn(["APPLIED", "REVIEWED", "INTERVIEW", "OFFER", "HIRED", "REJECTED"])
    .withMessage("Invalid status value"),
];

module.exports = { applyValidation, updateApplicationStatusValidation };
