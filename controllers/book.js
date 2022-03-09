const bookService = require("../service/book");
const bookValidator = require("../validator/book");

module.exports.getFloors = async (req, res, next) => {
  try {
    let _res = await bookService.getFloors(req);
    req.response = _res;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports.getSeatsByFloor = async (req, res, next) => {
  try {
    await bookValidator.getSeatsByFloor(req);
    let _res = await bookService.getSeatsByFloor(req);
    req.response = _res;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports.bookSeats = async (req, res, next) => {
  try {
    await bookValidator.bookSeats(req);
    let _res = await bookService.bookSeats(req);
    req.response = _res;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports.blockSeats = async (req, res, next) => {
    try {
      await bookValidator.bookSeats(req);
      let _res = await bookService.blockSeats(req);
      req.response = _res;
      next();
    } catch (error) {
      next(error);
    }
  };
