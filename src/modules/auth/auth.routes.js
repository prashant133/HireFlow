const validationMiddleware = require("../../middlewares/validate.middleware");
const { registerValidation, loginValidation } = require("./auth.validation");
const authController = require("../auth/auth.controller");

const router = requre("express").Router();

router.post(
  "/register",
  registerValidation,
  validationMiddleware,
  authController.register,
);

router.post(
  "/login",
  loginValidation,
  validationMiddleware,
  authController.login,
);

module.exports = router;
