const mongoose = require("mongoose");
const citySchema = new mongoose.Schema(
  {
    image: String,
    city: String,
    title: String,
    desc: String,
    price: String,
    cancellation: String,
  },
  {
    versionKey: false,
  }
);

const City = mongoose.model("city", citySchema);
module.exports = City;
