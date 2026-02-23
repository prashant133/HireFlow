const router = require("express").Router();
const authMiddleware = require("../../middlewares/auth.middleware");
const roleMiddleware = require("../../middlewares/role.middleware");
const validationMiddleware = require("../../middlewares/validate.middleware");
const { jobValidation, updateJobValidation } = require("./job.validation");
const jobController = require("../jobs/job.controller");

router.post(
  "/create",
  authMiddleware,
  roleMiddleware("RECRUITER"),
  jobValidation,
  validationMiddleware,
  jobController.create,
);

router.get("/get-all", jobController.getAllJob);
router.get(
  "/my-job",
  authMiddleware,
  roleMiddleware("RECRUITER"),
  jobController.getMyJob,
);

router.put(
  "/:jobId",
  authMiddleware,
  roleMiddleware("RECRUITER"),
  updateJobValidation,
  validationMiddleware,
  jobController.updateJob,
);

router.delete(
  "/:jobId",
  authMiddleware,
  roleMiddleware("RECRUITER"),
  jobController.deleteJob,
);

module.exports = router;
