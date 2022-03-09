const express = require("express");
const route = express.Router();
const bookController = require("../controllers/book");

// get floors
route.get("/getFloors", bookController.getFloors);

//get seats by floor id
route.get("/getSeatsByFloor", bookController.getSeatsByFloor);

//book seats by seat id
route.put("/bookSeats", bookController.bookSeats);

//block seats by seat id
route.put("/blockSeats", bookController.blockSeats);

module.exports = route;
