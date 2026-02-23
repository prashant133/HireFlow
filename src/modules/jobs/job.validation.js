const { body } = require("express-validator");

const jobValidation = [
  body("title").notEmpty().withMessage("Title is required"),
  body("description").notEmpty().withMessage("description is required"),
  body("location").notEmpty().withMessage("location is required"),
];

const updateJobValidation = [
  body("title").optional().notEmpty().withMessage("Title is required"),
  body("description")
    .optional()
    .notEmpty()
    .withMessage("description is required"),
  body("location").optional().notEmpty().withMessage("location is required"),
];

module.exports = { jobValidation, updateJobValidation };
