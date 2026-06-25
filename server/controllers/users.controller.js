const User = require("../models/users.models");
const bcrypt = require("bcryptjs");
const generateJWT = require("../utils/generate.JWT");
const { successResponse, errorResponse } = require("../utils/responseHandler");

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return errorResponse(res, "Email and password are required", 400);
    }
    const user = await User.findOne({ email });
    if (!user) {
      return errorResponse(res, "User not found", 400);
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return errorResponse(res, "Invalid credentials", 400);
    }
    const token = await generateJWT({
      email: user.email,
      id: user._id,
    });
    return successResponse(
      res,
      {
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      },
      "Login successful",
      200,
    );
  } catch {
    return errorResponse(res, "Server error during Login", 500);
  }
};

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return errorResponse(res, "Name, Email and Password are required", 400);
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return errorResponse(res, "User is already exists", 400);
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });
    const token = await generateJWT({ id: newUser._id });
    newUser.token = token;
    await newUser.save();
    return successResponse(
      res,
      {
        token,
        user: {
          id: newUser._id,
          name: newUser.name,
          email: newUser.email,
        },
      },
      "User created successfully",
      201,
    );
  } catch {
    return errorResponse(res, "Server error during Registration", 500);
  }
};
