const mongoose = require("mongoose");
const flightSchema = new mongoose.Schema({
  from: String,
  to: String,
  data: [
    {
      departure: String,
      loc1: String,
      duration: String,
      arrive: String,
      loc2: String,
      airline: String,
      prc: String,
      _id: String,
    },
  ],
});

const Flight = mongoose.model("flight", flightSchema);

module.exports = Flight;
