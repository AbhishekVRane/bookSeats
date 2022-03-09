module.exports = (err, req, res, next) => {
  let code = err.code || 500;
  res.status(code).json({
      success : false,
      error : true,
      message : err.message ? err.message : ''
  });
};
