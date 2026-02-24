const router = require("express").Router();
const authMiddleware = require("../../middlewares/auth.middleware");
const roleMIddleware = require("../../middlewares/role.middleware");
const applyValidation = require("../applications/application.validation");
const validationMiddleware = require("../../middlewares/validate.middleware");
const applicationController = require("../applications/application.controller");

router.post(
  "/:jobId/apply",
  authMiddleware,
  roleMIddleware("CANDIDATE"),
  applyValidation,
  validationMiddleware,
  applicationController.applyJob,
);

module.exports = router;
