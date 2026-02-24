const router = require("express").Router();
const authMiddleware = require("../../middlewares/auth.middleware");
const roleMiddleware = require("../../middlewares/role.middleware");
const {
  applyValidation,
  updateApplicationStatusValidation,
} = require("../applications/application.validation");
const validationMiddleware = require("../../middlewares/validate.middleware");
const applicationController = require("../applications/application.controller");

router.post(
  "/:jobId/apply",
  authMiddleware,
  roleMiddleware("CANDIDATE"),
  applyValidation,
  validationMiddleware,
  applicationController.applyJob,
);

router.patch(
  "/:applicationId/status",
  authMiddleware,
  roleMiddleware("RECRUITER"),
  updateApplicationStatusValidation,
  validationMiddleware,
  applicationController.updateApplicationStatus,
);

module.exports = router;
