// middlewares/404.middleware.js

const notFoundMiddleware = (req, res, next) => {
  const error = new Error(`Route ${req.originalUrl} not found`);
  error.statusCode = 404;
  next(error);
};

module.exports = notFoundMiddleware;
