const ApiError = require("../utils/ApiError");

const errorMiddleware = (err, req, res, next) => {
  console.error(err);

  const statusCode = err.statusCode || 500;

  const response = new ApiError(
    statusCode,
    err.message || "something went wrong",
    err.errors || [],
  );

  return res.status(statusCode).json({
    success: false,
    message: response.message,
    errors: response.errors,
    stack: process.env.NODE_ENV === "development" ? response.stack : undefined,
  });
};

module.exports = errorMiddleware;
