const errorResponse = (
  res,
  { statusCode = 500, message = "somthing is wrong , internal server error" }
) => {
  return res.status(statusCode).json({
    success: false,
    message,
  });
};
const successResponse = (
  res,
  { statusCode = 200, message = "successfully", payload = {} }
) => {
  return res.status(statusCode).json({
    success: true,
    message,
    payload,
  });
};

module.exports = { errorResponse, successResponse };
