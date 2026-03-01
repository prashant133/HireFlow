const router = require("express").Router();
const authMiddleware = require("../../middlewares/auth.middleware");
const roleMiddleware = require("../../middlewares/role.middleware");
const analyticsController = require("./analytics.controller");

router.get(
  "/applicants-per-job",
  authMiddleware,
  roleMiddleware("RECRUITER"),
  analyticsController.applicantsPerJob,
);

module.exports = router;
