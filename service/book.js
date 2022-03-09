const bookRepo = require("../repository/book");
const { SUCCESS_GET } = require("../constants");

module.exports.getFloors = async (req) => {
  let data = await bookRepo.getFloors();
  return {
    data: data,
    message: SUCCESS_GET,
  };
};

module.exports.getSeatsByFloor = async (req) => {
  let floorId = req.query.floorId;
  let data = await bookRepo.getSeatsByFloor(floorId);
  return {
    data: data,
    message: SUCCESS_GET,
  };
};

module.exports.bookSeats = async (req) => {
  let seats = req.body.seats;
  await bookRepo.checkSeats(seats);
  let data = await bookRepo.bookSeats(seats);
  return {
    code: 204,
  };
};

module.exports.blockSeats = async (req) => {
  let seats = req.body.seats;
  await bookRepo.checkSeats(seats);
  await bookRepo.blockSeats(seats);

  // unbloack after 5 mins
  setTimeout(() => {
    bookRepo.unBlockSeats(seats);
  }, 300000);
  return {
    code: 204,
  };
};
