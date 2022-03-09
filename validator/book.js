const Joi = require("joi");

module.exports.getSeatsByFloor = async (req) => {
  let paramSchema = Joi.object({
    floorId: Joi.number().required(),
  });
  await paramSchema.validateAsync(req.query);
};

module.exports.bookSeats = async (req) => {
  let bodySchema = Joi.object({
    seats: Joi.array().items(Joi.number()),
  });
  await bodySchema.validateAsync(req.body);
};
