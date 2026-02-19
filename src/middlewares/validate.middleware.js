const { validationResult } = require("express-validator");
const ApiError = require("../ut/ApiError");

const validateMiddleware = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((err) => err.msg);
    throw new ApiError(400, "Validation Error", errorMessages);
  }
  return next();
};

module.exports = validateMiddleware;
