const { HTTP_200_MESSAGE } = require("../../constants");

module.exports = (req, res, next) => {
  let code = req.response && req.response.code ? req.response.code : 200;
  let message =
    req.response && req.response.message
      ? req.response.message
      : HTTP_200_MESSAGE;
  let data = req.response && req.response.data ? req.response.data : null;

  res.status(code).json({
    success: true,
    error: false,
    message: message,
    data: data,
  });
};
