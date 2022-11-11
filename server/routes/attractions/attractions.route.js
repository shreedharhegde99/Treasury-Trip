const Attraction = require("./country/attractions.model");

const express = require("express");
const app = express.Router();

app.get("/", async (req, res) => {
  // console.log("request for attractions");
  const { page, country } = req.query;
  // console.log(page);
  if (country) {
    const countryData = await Attraction.findOne({ country: country });

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

module.exports = app;
