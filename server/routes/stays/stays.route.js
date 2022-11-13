const express = require("express");
const Stay = require("./stays.model");
const app = express.Router();

app.get("/:city", async (req, res) => {
  const { city} = req.params;
  const { page } = req.query;
  const skip = page ? (page - 1) * 10 : 0;
  // console.log(cityName);
  const cityData = await Stay.find({ city: city.toLowerCase() })
    .limit(10)
    .skip(skip);
  if (cityData.length) {
    res.status(200).send(cityData);
  } else {
    res.status(404).send({ message: "Data for this city is not available" });
  }
});

module.exports = app;
