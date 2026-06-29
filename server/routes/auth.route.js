const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/auth.middleware");
const userController = require("../controllers/auth.controller");
const { validateRequest } = require("../middlewares/validate.middleware");
const { loginSchema, registerSchema } = require("../schemas/auth.schema");

router.post(
  "/register",
  validateRequest(registerSchema),
  userController.register,
);
router.post("/login", validateRequest(loginSchema), userController.login);

module.exports = router;
