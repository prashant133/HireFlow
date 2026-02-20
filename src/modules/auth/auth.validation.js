const { body } = require("express-validator");

const registerValidation = [
  body("username").notEmpty().withMessage("Username is required"),
  body("email").isEmail().withMessage("Invalid Email Address"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be atleast 6 character"),
  body("role")
    .isIn(["CANDIDATE", "RECRUITER"])
    .withMessage("Role must be either Candidate or Recruiter"),
];

const loginValidation = [
  body("email").isEmail().withMessage("Email must be valid"),
  body("password").notEmpty().withMessage("password is required"),
];

module.exports = { registerValidation, loginValidation };
