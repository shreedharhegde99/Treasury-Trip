const mongoose = require("mongoose");
const attractionSchema = new mongoose.Schema(
  {
    country: String,
    data: [{ image: String, place: String, todo: String }],
  },
  {
    versionKey: false,
  }
);

const Attraction = mongoose.model("country", attractionSchema);
module.exports = Attraction;
