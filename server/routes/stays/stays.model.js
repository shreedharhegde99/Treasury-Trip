const mongoose = require("mongoose");

const staysSchema = new mongoose.Schema({
  image: String,
  hotel_name: String,
  promoted: String,
  city: String,
  distance: String,
  rating: Number,
  review: String,
  no_of_reviews: String,
  room_type: String,
  bed: String,
  price: String,
  charge: String,
  no_of_rooms_left: String,
});

const Stay = mongoose.model("stay", staysSchema);

module.exports = Stay;
