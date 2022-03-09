const express = require("express");
const route = express.Router();
const healthController = require("../controllers/health");

route.get("/", healthController);

module.exports = route;
