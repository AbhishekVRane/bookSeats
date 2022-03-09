module.exports = async (req, res, next) => {
  try {
    if (req.query.err) {
      throw "its an error!!!";
    }
    req.response = {
      success: true,
      error: false,
      message: "vizmo is up",
    };
    next();
  } catch (error) {
    next(error);
  }
};
