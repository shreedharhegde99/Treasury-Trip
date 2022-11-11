const mongoose = require("mongoose");
const citySchema = new mongoose.Schema(
  {
    country: String,
    data: [{ image: String, place: String, todo: String }],
  },
  {
    versionKey: false,
  }
);

const City = mongoose.model("city", citySchema);
module.exports = City;
