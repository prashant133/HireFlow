const checkRole = (...roles) => {
  return (req, res, next) => {
    // Check if the user’s role (from req.user) matches one of the allowed roles
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: "Access denied" });
    }
    next();
  };
};

module.exports = checkRole;
