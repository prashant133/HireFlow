const authService = require("../auth/auth.service");
const ApiResponse = require("../../utils/ApiResponse");
const asyncHandler = require("../../utils/asyncHandler");

const register = asyncHandler(async (req, res, next) => {
  const user = await authService.register(req.body);
  return res
    .status(201)
    .json(new ApiResponse(201, user, "user registered successfully"));
});

const login = asyncHandler(async (req, res, next) => {
  const user = await authService.login(req.body);
  return res
    .status(200)
    .json(new ApiResponse(200, user, "user logged in succesfully"));
});


module.exports = {register , login}