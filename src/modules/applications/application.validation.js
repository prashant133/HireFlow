const { param } = require("express-validator");

const applyValidation = [
  param("jobId").isMongoId().withMessage("Invalid jobId"),
];

module.exports = applyValidation;
