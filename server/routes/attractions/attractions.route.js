const Attraction = require("./country/attractions.model");
const City = require("./cities/cities.model");

const express = require("express");
const app = express.Router();

/* country query */
app.get("/", async (req, res) => {
  // console.log("request for attractions");
  const { country } = req.query;
  // console.log(page);
  if (country) {
    const countryData = await Attraction.findOne({
      country: country.toLowerCase(),
    });

    if (countryData?.data) {
      res.status(200).send(countryData.data);
    } else {
      res
        .status(404)
        .send({ message: "Data not available for country requested" });
    }

    return;
  }
  res.send({ message: "Please provide the country name" });
});

/* city query */

app.get("/:cityName", async (req, res) => {
  const { cityName } = req.params;
  const { page } = req.query;
  const skip = page ? (page - 1) * 10 : 0;
  // console.log(cityName);
  const cityData = await City.find({ city: cityName.toLowerCase() })
    .limit(10)
    .skip(skip);
  if (cityData.length) {
    res.status(200).send(cityData);
  } else {
    res.status(404).send({ message: "Data for this city is not available" });
  }
});

module.exports = app;
