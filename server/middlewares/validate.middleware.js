const { z } = require("zod");
const { errorResponse } = require("../utils/responseHandler");

const validateRequest = (schema) => {
  return (req, res, next) => {
    try {
      const validatedData = schema.parse(req.body);
      req.body = validatedData;
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors =
          error.issues?.map((err) => ({
            field: err.path?.join(".") || "unknown",
            message: err.message || "Validation error",
          })) || [];
        return errorResponse(res, "Validation failed", 400, errors);
      }
      console.error("Validation middleware error:", error);
      return errorResponse(res, "Validation error", 500);
    }
  };
};

module.exports = { validateRequest };
