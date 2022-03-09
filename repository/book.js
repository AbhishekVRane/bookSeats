const floorModel = require("../models/floors.json");
const seatModel = require("../models/seats.json");

module.exports.getFloors = async () => {
  let data = floorModel;
  return data.filter((each) => each.isActive);
};

module.exports.getSeatsByFloor = async (floorId) => {
  let data = seatModel;
  return data.filter((each) => each.floorId == floorId && each.isActive);
};

module.exports.bookSeats = async (seats) => {
  let data = seatModel;
  return data.forEach((each) => {
    if (seats.includes(each.id) && each.isActive) {
      each.booked = true;
    }
  });
};

module.exports.blockSeats = async (seats) => {
  let data = seatModel;
  data.forEach((each) => {
    if (seats.includes(each.id) && each.isActive) {
      each.blocked = true;
    }
  });
  return true;
};

module.exports.unBlockSeats = async (seats) => {
  let data = seatModel;
  data.forEach((each) => {
    if (seats.includes(each.id)) {
      each.blocked = false;
    }
  });
  return true;
};

module.exports.checkSeats = async (seats) => {
  let data = seatModel;
  let filteredData = data.filter(
    (each) =>
      seats.includes(each.id) && (!each.isActive || each.booked || each.blocked)
  );
  if (filteredData.length > 0) {
    throw {message : `Seats ${filteredData.map((each) => each.id)} not available`};
  }
  return true;
};
